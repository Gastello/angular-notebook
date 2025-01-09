import { Injectable } from '@angular/core';
import {SubjectsSelect} from '../interfaces/subjects-select';

@Injectable({
  providedIn: 'root'
})
export class ManageFormService {
  nameAndSurname: string = "";
  subjectsObject: SubjectsSelect = {
    selectedSubject: 'math',
    subjects: ['math', 'physic', 'english', 'music']
  };
  isPassed: boolean = false;

  constructor() { }

  checker(){
    console.log('%cChecker() - data from service', 'color: yellow')
    console.log(this.nameAndSurname);
    console.log(this.subjectsObject);
    console.log(this.isPassed);
    console.log('%c-----------------------', 'color: yellow')
  }

  public getNameAndSurname(): string {
    return this.nameAndSurname;
  }
  public setNameAndSurname(newNameAndSurname: string): void {
    this.nameAndSurname = newNameAndSurname;
  }

  public getSubjects(): Array<string> {
    return this.subjectsObject.subjects;
  }
  public setSubjects(newSubjects: Array<string>): void {
    this.subjectsObject.subjects = newSubjects;
  }

  public addSubject(subject: string): void {
    this.subjectsObject.subjects.push(subject);
  }
  public removeSubject(index: number): void {
    this.subjectsObject.subjects.splice(index, 1);
  }
  public getSelectedSubject(): string {
    return this.subjectsObject.selectedSubject;
  }
  public setSelectedSubject(subject: string): void {
    this.subjectsObject.selectedSubject = subject;
  }

  public getIsPassed(): boolean {
    return this.isPassed;
  }
  public setIsPassed(val: boolean): void {
    this.isPassed = val;
  }

  // localStorage
  public localStorageCheck():void{
    if(localStorage.getItem('data')===null){
      console.log("Empty!");
      this.updateLocalStorage();
    } else{
      console.log("Not Empty!");
      this.getLocalStorage();
    }
  }

  public updateLocalStorage(){
    this.localStorageSaveData('data', JSON.stringify({
      nameAndSurname: this.nameAndSurname,
      subjectsObject: JSON.stringify(this.subjectsObject),
      isPassed: this.isPassed,
    }));
  }

  public getLocalStorage(): void{
    let lcData = JSON.parse(this.localStorageGetData('data'));
    this.setNameAndSurname(lcData.nameAndSurname);
    this.setIsPassed(lcData.isPassed);

    let lcDataSubjects = JSON.parse(lcData.subjectsObject);
    this.setSubjects(lcDataSubjects.subjects)
    this.setSelectedSubject(lcDataSubjects.selectedSubject)
  }

  private localStorageSaveData(key: string, value: string):void {
    localStorage.setItem(key, value);
  }

  private localStorageGetData(key: string):any {
    return localStorage.getItem(key)
  }
}
