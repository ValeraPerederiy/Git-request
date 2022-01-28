import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GitUserServiseService } from '../git-user-servise.service';
import { UserInterface } from '../user.interface';

@Component({
  selector: 'app-form-request',
  templateUrl: './form-request.component.html',
  styleUrls: ['./form-request.component.scss']
})
export class FormRequestComponent implements OnInit {

  userNameControl:FormControl;
  public user:UserInterface | null = null;

  constructor(public gitUserService: GitUserServiseService) {
    this.userNameControl = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ])
   }

  ngOnInit(): void {
  }

  public goRequest(userName:string):void{
    this.gitUserService.getUser(userName).subscribe((user:UserInterface)=>{
      this.user = user;
    })
  }
}
