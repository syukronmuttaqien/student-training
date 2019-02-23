import React, { Component } from 'react';
import { Card, List, Icon, Modal } from 'antd';
import {Consumer} from '../Context';
import { dispatch } from 'rxjs/internal/observable/pairs';


class Student extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      onShowClick: false,
      modalVisible: false,
    }
  }

  showClick = () => {
    const { onShowClick } = this.state;
    
    this.setState({ onShowClick: !onShowClick });
  }

  onDelete = (id, dispatch) => {
    dispatch({type: 'DELETE_STUDENT', payload: id});
  }

  render() { 
    console.log(this.props);
    const { student: { id, name, email, phone } } = this.props;
    const { onShowClick } = this.state;
    return (
      <Consumer>
        { value => {
          const { dispatch } = value;
          return (<div style={{background: '#ECECEC', padding:'16px'}} >
              <Card 
                bordered
                style={{ width: '100%' }}
              >
                <List>
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <h1 style={{margin: 0}}>{name}</h1>
                    &nbsp;
                    &nbsp;
                    <Icon onClick={this.showClick} style={{fontSize: 24, color: 'black'}} type="down" />
                    <Icon onClick={this.onDelete.bind(this, id, dispatch)} style={{fontSize: 24, color: 'red', textAlign: 'right'}} type="close" />
                  </div>
                  { onShowClick ?
                    <div>
                      <li>{email}</li>
                      <li>{phone}</li>
                    </div>
                    : null
                  }
                </List>
              </Card>

            
          </div>
          )}
        }
      </Consumer>
    )
  }
}
 
export default Student;