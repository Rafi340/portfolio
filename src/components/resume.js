import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="pic.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '1.5em'}}>Rafi Samnan</h2>
            <h4 style={{color: 'grey'}}>Developer</h4>
            <hr style={{borderTop: '4px solid #833fb2', width: '55%'}}/>
            <p>My Name is Rafi Samnan. I am graduate from AIUB.</p>
            <hr style={{borderTop: '4px solid #833fb2', width: '55%'}}/>
            <h5>Address</h5>
            <p>3B, House no. 9 , Road no.9 , nikunja 2, Khilkhet,Dhaka, Bangladesh</p>
            <h5>Phone</h5>
            <p>(880) 456-7890</p>
            <h5>Email</h5>
            <p>rafisamnan340@gmail.com</p>
            <h5>My Web Site</h5>
            <p>https://rafi340.github.io/portfolio/</p>
            <hr style={{borderTop: '4px solid #833fb2', width: '55%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2013}
              endYear={2015}
              schoolName="Jamalpur Zila School"
              schoolDescription="Jamalpur Zila School is a public high school in Jamalpur District and one of the oldest schools in Bangladesh."
               />

               <Education
                 startYear={2018}
                 endYear={2021}
                 schoolName="American International University-Bangladesh"
                 schoolDescription="American International University-Bangladesh, 
                 commonly known by its acronym AIUB, is an accredited private university in Dhaka, Bangladesh.
                  The university is an independent organization with own Board of Trustees."
                  />
                <hr style={{borderTop: '4px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2022}
              endYear={2024}
              jobName="Software Developer"
              jobDescription="A software engineer, sometimes abbreviated SWE (pronounced /swi/) is a person 
              who applies the principles of software engineering to the design, 
              development, maintenance, testing, and evaluation of computer software."
              />

              <Experience
                startYear={2024}
                endYear={2028}
                jobName="Web Developer"
                jobDescription="A web developer is a programmer who specializes in, 
                or is specifically engaged in, the development of World Wide Web applications using a client–server"
                />
              <hr style={{borderTop: '4px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={85}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={75}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={75}
                    />
                    <Skills
                      skill="React"
                      progress={80}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
