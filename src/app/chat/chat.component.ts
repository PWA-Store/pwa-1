import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  routingSubscription: any;

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.routingSubscription = 
      this.route.params.subscribe(params => {
        console.log(params["id"]);
      });

    //this.data.getList
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }
}
