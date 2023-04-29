import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.css']
})
export class DocListComponent implements OnInit {

  documentData: any;
  url: string = '/assets/document.json';

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.getDocuments(this.url).subscribe(data => {
      this.documentData = data;
    });
  }

}
