import * as React from 'react';

import styles from './Solutiondevopstest.module.scss';
import { ISolutiondevopstestProps } from './ISolutiondevopstestProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Solutiondevopstest extends React.Component<ISolutiondevopstestProps, {}> {
  public render(): React.ReactElement<ISolutiondevopstestProps> {
    return (    
      <div className={styles.panelStyle} >   
           <div className={styles.tableCaptionStyle} >Microsoft Lists – MSA Preview
A few days back, Microsoft released Microsoft Lists preview for Microsoft Accounts. It means any user with Microsoft IDs or Outlook IDs would be able to leverage Microsoft Lists for their personal or small-scale business scenarios.</div> 
      
          <div className={styles.tableCaptionStyle} >Today's date is 17th May 2022.This is DevOps Testing through AzurePipelines Agent Pool</div> 

          <div className={styles.tableCaptionStyle} >Welcome to Azure DevOps CI/CD for SPFX</div>  
            <div className={styles.tableCaptionStyle} >Customize SharePoint Experiences using WebParts !!!  </div>  
             

           
              
             
                      
          
        </div>    
  
  
    ); 
  }
}
