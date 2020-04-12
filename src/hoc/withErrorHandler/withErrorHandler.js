import React, { Component } from 'react'
import Aux from '../Auxi'
import Modal from '../../components/UI/Modal/Modal'
const withErrorHandler =(WrappedComponent,axios)=>{

    return class extends Component{
        state={
                error:null,
                }
        componentDidMount(){
            this.reqInterceptor=axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req;
            })
            this.respoInterceptor= axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:error})
        })}
        componentWillUnmount() {//when burgerbuilder is not needed interceptor are cleaned, so that when this is reused no more 
                                //unneded interceptors arec reated 
                axios.interceptors.request.eject(this.reqInterceptor);
                axios.interceptors.request.eject(this.respInterceptor);
        }
        
        errorConfirmedHAndler=()=>{
                this.setState({error:null})
        }
        render(){
        return(
        <Aux>
            <Modal show={this.state.error} 
                    modalClosed={this.errorConfirmedHAndler}>
                    {this.state.error?this.state.error.message: null}
            </Modal>
         <WrappedComponent {...this.props}/>
        </Aux>)}
    
    }
}
export default withErrorHandler