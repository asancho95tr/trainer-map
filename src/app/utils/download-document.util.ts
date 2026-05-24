export function downloadDocumentFromAssets(documentName: string, fileName: string) {
    const link = document.createElement('a');
    link.download = fileName;
    link.href = `assets/${documentName}`;
    link.click();
}