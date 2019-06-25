<h2>Get Request</h2>
<pre>
  <code>
    get(url, callbackFun) {
        this.httpReq.open('GET', url, true);
        this.httpReq.onload = () => {
            if (this.httpReq.status === 200) {
                callbackFun(null, this.httpReq.responseText);
            } else {
                callbackFun('Error :' + this.httpReq.status)
            }
        }
        this.httpReq.send();
    }
  </code>
</pre>


<h2>Post Request</h2>
<pre>
  <code>
     post(url, dataId, callbackFun) {
        this.httpReq.open('POST', url, true);
        this.httpReq.setRequestHeader('Content-type', 'application/json');
        this.httpReq.onload = () => {

            callbackFun(null, this.httpReq.responseText);
        }
        this.httpReq.send(JSON.stringify(dataId));

    }
  </code>
</pre>


<h2>Put Request</h2>
<pre>
  <code>
      put(url, dataId, callbackFun) {
        this.httpReq.open('PUT', url, true);
        this.httpReq.setRequestHeader('Content-type', 'application/json');
        this.httpReq.onload = () => {

            callbackFun(null, this.httpReq.responseText);
        }
        this.httpReq.send(JSON.stringify(dataId));
    }
  </code>
</pre>

<h2>Delete Request</h2>
<pre>
  <code>
    delete(url, callbackFun) {
        this.httpReq.open('DELETE', url, true);
        this.httpReq.onload = () => {
            if (this.httpReq.status === 200) {
                callbackFun(null, "data delete succefully");
            } else {
                callbackFun('Error :' + this.httpReq.status)
            }
        }
        this.httpReq.send();
    }
  </code>
</pre>






