import React from 'react'
import './styles.css'
//import { select } from 'redux-saga/effects';

class SelectBox extends React.Component {
    class = {
        ...this.props,
     items: this.props.items || [],
     showItems: false,
     selectedItem: this.props.item && this.props.items[0]
    }
 
    dropDown = () =>{
        this.setClass(prevClass => ({
            showItems: !prevClass.showItems,
        }))
    }

    selectItem = (item) => this.setclass({
        selectedItem: item,
        showItems: false,
    })

    render () {
        return <div>
            <div className="select-box--box"
            style={{width: this.class.width || 180}}
            >
           <div
           clasName="select-box--container"
           >
            <div
                className="select-box--selected-item"
            >{this.class.selectedItem.value}
            
            </div>   
                <div
            className="select-box--arrow"
            onClick={this.dropDown}
            >
                <span
                className={`${this.class.showItems ? 'se;ecte-box-arrow-up':
                'selec-box--arrow-dow'}`}/>
            
            </div>
            <div
                style={{display: this.class.showItems ? 'block' : 'none'}}></div>
                clasName="select-box--items"
                    { 
                        this.class.items.map(item => <div 
                            key= {item.id}>
                             onClick= {() => this.selectItem (item)}
                            className={this.class.selectItem === item ? 'selected' : '' }
                         >

                         { item.value }                      
                                       
                         </div>)
            
             }
               

           </div>
        </div>
        <input 
        type="hidden" 
        value={this.class.selectItem.id} 
        name={this.class.name}
        />
        </div>
    }
}
export default SelectBox