import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  emial : string | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,

  ) {  }

  ngOnInit(): void {
    
  }


}
