export function getTotalServiceRequest(){
    return function (dispatch) {
        axios.get(`http://localhost:3600/Admin/serviceRequest/totalCount`)
            .then(response => {
                if(response.data.length > 0){
                    console.log(response.data);
                    this.setState({ totalServiceRequestCount: response.data })
                    console.log(this.state.totalServiceRequestCount);
                }else{
                    alert("no ");
                }
            })
            .catch(err => {
                alert("err=" + JSON.stringify(err));
            })
    }
}