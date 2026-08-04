const SHEET_NAME = "Website Enquiries";
const SPREADSHEET_NAME = "Gajanand Website Enquiries"; // used only if a brand-new spreadsheet has to be created

// Single source of truth for both the column order AND which piece of form
// data goes in each column. Add a new row here any time you add a new field
// to the enquiry form — the sheet will pick it up automatically on the next
// submission, no manual column editing required.
const FIELD_MAP = [
  { header: "Submitted At", key: "submittedAt" },
  { header: "Name", key: "name" },
  { header: "Phone", key: "phone" },
  { header: "Email", key: "email" },
  { header: "Company Name", key: "companyName" },
  { header: "City", key: "city" },
  { header: "Product", key: "product" },
  { header: "Quantity / Requirement", key: "quantity" },
  { header: "Message", key: "message" },
  { header: "Source Page", key: "source" },
];
const HEADERS = FIELD_MAP.map((f) => f.header);

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: "Gajanand enquiry endpoint is active." }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  // Prevents two near-simultaneous submissions from both trying to create
  // the sheet/headers at once and corrupting row 1.
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const sheet = getOrCreateSheet_();
    ensureHeaders_(sheet);
    const data = e.parameter || {};

    const row = FIELD_MAP.map(({ key }) => {
      if (key === "submittedAt") return data.submittedAt || new Date();
      return data[key] || "";
    });
    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, message: "Enquiry saved." }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Finds the spreadsheet to use, creating one from scratch if none exists yet.
//   1. If this script is bound to a Sheet (opened via Extensions > Apps
//      Script from inside a spreadsheet), use that one.
//   2. Otherwise, reuse whichever spreadsheet this script created last time
//      (its ID is remembered in Script Properties).
//   3. Otherwise, create a brand-new spreadsheet and remember its ID for
//      next time, so it doesn't create a fresh one on every single request.
function getOrCreateSpreadsheet_() {
  const bound = SpreadsheetApp.getActiveSpreadsheet();
  if (bound) return bound;

  const props = PropertiesService.getScriptProperties();
  const savedId = props.getProperty("SPREADSHEET_ID");

  if (savedId) {
    try {
      return SpreadsheetApp.openById(savedId);
    } catch (err) {
      // Saved spreadsheet was deleted/moved — fall through and make a new one.
    }
  }

  const created = SpreadsheetApp.create(SPREADSHEET_NAME);
  props.setProperty("SPREADSHEET_ID", created.getId());
  return created;
}

function getOrCreateSheet_() {
  const spreadsheet = getOrCreateSpreadsheet_();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    // A brand-new spreadsheet starts with a default "Sheet1" tab — remove it
    // once our real tab exists, so you don't end up with a stray empty tab.
    const defaultSheet = spreadsheet.getSheetByName("Sheet1");
    if (defaultSheet && spreadsheet.getSheets().length > 1) {
      spreadsheet.deleteSheet(defaultSheet);
    }
  }

  return sheet;
}

// Rewrites row 1 to exactly match HEADERS whenever it's missing, empty, or
// out of sync (wrong column count, edited by hand, etc.) — so the header
// row self-repairs instead of silently drifting out of date.
function ensureHeaders_(sheet) {
  const existing = sheet.getLastRow() > 0
    ? sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0]
    : [];
  const matches = existing.length === HEADERS.length && existing.every((v, i) => v === HEADERS[i]);
  if (matches) return;

  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  sheet.autoResizeColumns(1, HEADERS.length);
}