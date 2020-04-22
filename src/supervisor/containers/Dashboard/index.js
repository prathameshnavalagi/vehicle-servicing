import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CoolTabs from 'react-cool-tabs';

class Content1 extends Component {
    render() {
      return <div>
        this is Content1
      </div>
    }
  }
  class Content2 extends Component {
    render() {
      return <div>
        this is Content2
      </div>
    }
  }

class SupervisorDashboard extends Component{
    render() {
        return (
          <div>
              <CoolTabs
                tabKey={'1'}
                leftContent={<Content1/>}
                rightContent={<Content2/>}
                contentTransitionStyle={'transform 0.6s ease-in'}
                borderTransitionStyle={'all 0.6s ease-in'}/>
          </div>
     );
     }
}

export default SupervisorDashboard;