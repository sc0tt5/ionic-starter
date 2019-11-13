import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss']
})
export class NewItemPage implements OnInit {
  new_item_form: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private itemService: ItemService
  ) {}

  ngOnInit() {
    this.new_item_form = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  createItem(value) {
    this.itemService.createItem(value.title, value.description);
    this.new_item_form.reset();
    this.goBack();
  }
}
