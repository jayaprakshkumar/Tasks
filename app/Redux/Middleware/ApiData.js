import {OrderProductData} from '../../Model/Data/OrderProductData'
import {OrderData} from '../../Model/Data/OrderData'
import {OrderItemData} from '../../Model/Data/OrderItemData'
import {KitchenItemData} from '../../Model/Data/KitchenItemData'
import {BillingData} from '../../Model/Data/BillingData'
import {BillingItemData} from '../../Model/Data/BillingItemData'
import {SystemData} from '../../Model/Data/SystemData'


export const apiDataMiddleware  = store => next => action => {

    
    
    if(action.type=="API_WATCH_SERVER_CHANGE"){
        data = new SystemData(store);
        data.checkServer();
    }
    

    if(action.type=="APP_ROOM_ITEM_LOAD"){
        data = new SystemData(store);
        data.loadRoomList();
    }
    

    if(action.type=="APP_CATEGORY_ITEM_LOAD"){
        data = new SystemData(store);
        data.loadGategoryList();
    }
    

    if(action.type=="APP_TAX_ITEM_LOAD"){
        data = new SystemData(store);
        data.loadTaxList();
    }



    if(action.type=="ORDER_PRODUCT_LOAD"){
        data = new OrderProductData(store);
        data.loadList();
    }
    
    if(action.type=="ORDER_LIST_LOAD"){
        data = new OrderData(store);
        data.loadList();
    }

    if(action.type=="ORDER_LIST_ADD_ITEM"){
        data = new OrderData(store);
        action.dataList = data.addNewItem(action.dataItem);
    }

    if(action.type=="ORDER_LIST_UPDATE_STATUS"){
        data = new OrderData(store);
        action.dataList = data.updateItemStatus(action.dataItem);
    }
    
    
    if(action.type=="ORDER_ITEM_LOAD"){
        data = new OrderItemData(store);
        data.loadList();
    }

    if(action.type=="ORDER_ITEM_UPDATE_QUANTITY"){
        data = new OrderItemData(store);
        action.dataList = data.updateItemQunatity(action.dataItem);
    }

    if(action.type=="ORDER_ITEM_UPDATE_STATUS"){
        data = new OrderItemData(store);
        action.dataList = data.updateItemStatus(action.dataItem);
    }

    if(action.type=="ORDER_ITEM_ADD_ITEM"){
        data = new OrderItemData(store);
        action.dataList = data.addNewItem(action.dataItem);
    }
    
    if(action.type=="KITCHEN_ITEM_LOAD"){
        data = new KitchenItemData(store);
        data.loadList();
    }

    if(action.type=="KITCHEN_ITEM_UPDATE_STATUS"){
        data = new KitchenItemData(store);
        action.dataList = data.updateItemStatus(action.dataItem);
    }
    
    if(action.type=="BILLING_LIST_LOAD"){
        data = new BillingData(store);
        data.loadList();
    }    
    
    if(action.type=="BILLING_LIST_BILL_ITEM"){
        data = new BillingData(store);
        action.dataList = data.saveBill(action.dataItem);
    }

    if(action.type=="BILLING_LIST_UPDATE_STATUS"){
        data = new BillingData(store);
        action.dataList = data.updateItemStatus(action.dataItem);
    }   
    
    if(action.type=="BILLING_ITEM_LIST_LOAD"){
        data = new BillingItemData(store);
        data.loadList();
    }  

    if(action.type=="BILLING_ITEM_UPDATE_STATUS"){
        data = new BillingItemData(store);
        action.dataList = data.updateItemStatus(action.dataItem);
    }    
    
    
    next(action)
}