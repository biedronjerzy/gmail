import { browser, element, by, $ } from 'protractor';
import { IButton, IElement, ITextBox, IDropDown } from '../utilities/interfaces';

export class LogInPage {

  elements = {
    logo: <IElement> $(`#logo`),
    email: <ITextBox> $('#identifireId'),



    switchApp: <IDropDown>$(`.app-name-panel`),
    specificApp: (appname : string): IButton => element(by.cssContainingText(`.treeview-menu>li`, appname)),
    dashboard: <IButton>$("[sref-target='dashboard']"),
    examDatesForCentre: <IButton>$("[sref-target='exam-dates-for-centre']"),
    examDatesForLocation: <IButton>$("[sref-target='exam-dates-for-locations']"),
    planTestDate: <IButton>$("[sref-target='choose-exam-date']"),
    logout: <IButton>$('[sref-target="signout"]'),
    alert: <IElement>$(`.toast`),
    warning: <IElement>$('.unselect-warning-modal'),
    disableExamDate: <IButton>$('.btn-danger'),
    examMaterials: <IButton> $('[ng-click="vm.examMaterialsOpen = !vm.examMaterialsOpen"]'),
    examMaterialsList: (text: string): IDropDown => element(by.cssContainingText(`[ng-class="{'menu-open': vm.examMaterialsOpen}"] > li`, text)),
    pageTitle: <IElement> $('.content-header > h1'),
  };
};