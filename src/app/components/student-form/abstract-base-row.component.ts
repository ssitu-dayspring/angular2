import { Input, Output, EventEmitter } from '@angular/core';

export abstract class AbstractBaseRowComponent
{
    @Input() idx: number;
    @Output() onRemove: EventEmitter<number> = new EventEmitter();
    @Output() onChangeStudentType: EventEmitter<boolean> = new EventEmitter();

    errList: any = [
        { type: 'required',  msg: 'Name is required' },
        { type: 'maxlength', msg: 'Exceeded maximum of 255 characters' }
    ];

    remove() {
        this.onRemove.emit(this.idx);
    }

    changeStudentType(isCollegeStudent: boolean) {
        this.onChangeStudentType.emit(isCollegeStudent);
    }
}