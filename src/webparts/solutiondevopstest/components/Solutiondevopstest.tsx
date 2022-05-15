import * as React from 'react';

import styles from './Solutiondevopstest.module.scss';
import { ISolutiondevopstestProps } from './ISolutiondevopstestProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Solutiondevopstest extends React.Component<ISolutiondevopstestProps, {}> {
  public render(): React.ReactElement<ISolutiondevopstestProps> {
    return (    
      <div className={styles.panelStyle} >   
          
      <div className={styles.tableCaptionStyle} >Today's Date is 26th July 2021 - Monday</div>  

          <div className={styles.tableCaptionStyle} >Welcome to Azure DevOps CI/CD for SPFX</div>  
            <div className={styles.tableCaptionStyle} >Customize SharePoint Experiences using WebParts !!!  </div>  
             

           
              
             
                      
          
        </div>    
  
  
    ); 
  }
}
