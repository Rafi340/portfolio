import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          
      
      
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'Blue'}} >React Online Portfolio</CardTitle>
            <CardText>
            React makes it painless to create interactive UIs. 
            Design simple views for each state in your application, and React will efficiently update and render just the right 
            components when your data changes. Declarative views make your code more predictable and easier to debug.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'Blue'}} >React Project</CardTitle>
            <CardText>
            React makes it painless to create interactive UIs. 
            Design simple views for each state in your application, and React will efficiently update and render just the right 
            components when your data changes. Declarative views make your code more predictable and easier to debug.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

         
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular Project</h1>
        <hr style={{borderTop: '3px solid #833fb2', width: '27%'}}/>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'Blue'}} >AngularJs portfolio Project </CardTitle>
            <CardText>
            AngularJS is a toolset for building the framework most suited to your application development.
            It is fully extensible and works well with other libraries.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS Project</h1>
        <hr style={{borderTop: '3px solid #833fb2', width: '25%'}}/>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'Blue'}} >VueJS portfolio Project </CardTitle>
            <CardText>
            Vue.js - The Progressive JavaScript Framework.

            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB Project</h1>
        <hr style={{borderTop: '3px solid #833fb2', width: '30%'}}/>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'Blue'}} >MongoDB Project </CardTitle>
            <CardText>
            The Easiest Way to Deploy, Operate, and Scale MongoDB in the Cloud in Just a Few Clicks. 
            Create Deployments in Minutes w/ MongoDB Atlas. Supporting AWS. Types: Avail. 
            on AWS, GCP, Azure, Zero-downtime migration, Pay as you go.

            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
