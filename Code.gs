function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Get Domains details')
  .addItem('Start', 'gmailData')
  .addSeparator()
  // .addItem('Clear', 'clearLogs')
  .addToUi();
}

function gmailData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("non-zap");
  var threads = GmailApp.search("is:unread in:<lableName>", 0,500);
   
  for (var t=0; t<threads.length; t++) {
    sheet.appendRow([threads[t].getLastMessageDate(), threads[t].getFirstMessageSubject()]);
    GmailApp.markMessageRead(threads[t].getMessages()[0]);
  }
}

// function clearLogs() {
//   Logger.clear();
// }
