import { UserService } from 'src/app/shared/services/user.service';
import { User } from './../../../shared/models/user';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-picture-from',
  templateUrl: './picture-from.component.html',
  styleUrls: ['./picture-from.component.scss']
})
export class PictureFromComponent implements OnInit {

  URL = 'http://localhost:3000/picture';

  images;

  constructor(private http: HttpClient, @Inject(MAT_DIALOG_DATA) public pers: User, private userService: UserService,
              public dialogRef: MatDialogRef<PictureFromComponent>) { }

  ngOnInit() {
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    const name = this.sansAccent(`${this.pers.firstname}_${this.pers.lastname}.jpg`);
    formData.append('picture', this.images, name);

    this.http.post<any>(this.URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    this.pers.imgURL = name;
    this.dialogRef.close();
    this.userService.updateUserPicture(this.pers).subscribe();
  }

  sansAccent(stringToconvert: string) {
    const accent = [
      /[\300-\306]/g, /[\340-\346]/g, // A, a
      /[\310-\313]/g, /[\350-\353]/g, // E, e
      /[\314-\317]/g, /[\354-\357]/g, // I, i
      /[\322-\330]/g, /[\362-\370]/g, // O, o
      /[\331-\334]/g, /[\371-\374]/g, // U, u
      /[\321]/g, /[\361]/g, // N, n
      /[\307]/g, /[\347]/g, // C, c
    ];
    const noaccent = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', 'N', 'n', 'C', 'c'];

    let str = stringToconvert;
    for (let i = 0; i < accent.length; i++) {
      str = str.replace(accent[i], noaccent[i]);
    }

    return str;
  }

}
