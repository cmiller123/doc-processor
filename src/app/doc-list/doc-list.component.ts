import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../service/document.service';
import { Document } from '../model/document';

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.css']
})
export class DocListComponent implements OnInit {

  documentData: any;
  document: any;
  file: any;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.getAllDocuments();
  }

  getAllDocuments(): void {
    this.documentService.getDocuments().subscribe(data => {
        this.documentData = data;
    });
  }

  getDocument(document: Document): void {
    console.log("Getting Documents...")
    this.documentService.getDocument(document.name).subscribe(data => {
        this.document = data;
    });
  }

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  uploadFile(): void {
    if (this.file !== undefined) {
      // send request
      const formData = new FormData();
      formData.append("document", this.file);
      this.documentService.uploadDocument(formData).subscribe(
        data => console.log('success')
      );
    }
  }

}
