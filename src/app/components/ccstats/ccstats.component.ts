import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowHideSection } from 'src/app/models/ShowHideSection';

@Component({
  selector: 'ccstats',
  templateUrl: './ccstats.component.html',
  styleUrls: ['./ccstats.component.css']
})
export class CcstatsComponent implements OnInit {

  shs: ShowHideSection = new ShowHideSection();

  user: String = "default";

  constructor(private activatedRoute: ActivatedRoute) {
    let user = this.activatedRoute.snapshot.paramMap.get("user");
    if (user)
      this.user = user;
  }

  ngOnInit(): void {
  }

}
