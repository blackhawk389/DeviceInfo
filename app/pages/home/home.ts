import {Page, NavController, NavParams, Platform, Storage, LocalStorage} from 'ionic-angular';
import {Device} from 'ionic-native';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    
    
    
    model;
    platform;
    uuid;
    version;
    manufecturer;
    isvertual;
    serial;
    istrue = false;
    
    constructor(){ 
        
        this.model = Device.device.model;
        this.platform = Device.device.platform;
        this.uuid = Device.device.uuid;
        this.isvertual = Device.device.isVirtual;
        this.serial = Device.device.serial; 
        this.manufecturer = Device.device.manufacturer
             
    }
    
    showinfo(){
        this.istrue = true;
        console.log(this.istrue);
    }
    
    
    
    
}
