export class TableUtil {
    //const button: HTMLElement | null

    static exportToPdf(tableId: string, name?: string) {
       let printContents, popupWin: any | null;
      const tabla = document.getElementById(tableId) as HTMLElement;
       printContents = tabla.innerHTML;

      console.log(printContents)
      popupWin = window.open('', '_blank', 'top=0,left=0,height=600,width=800') ;
      popupWin.document.open();
      popupWin.document.write(`
    <html>
      <head>
        <title>Print tab</title>
       
      </head>
  <body onload="window.print();window.close()"><table class="table table-bordered">${printContents}</table></body>
    </html>`
      );
      popupWin.document.close();
    }
  }