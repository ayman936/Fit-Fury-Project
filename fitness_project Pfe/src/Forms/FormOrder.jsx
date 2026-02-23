import './FormOrder.css';
export default function FormOrder(){
    return(
        <div class="login-box">
 <form>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>FirstName</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>LastName</label>
    </div>
    <div class="user-box">
      <input type="email" name="" required=""/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type='text' name="" required=""/>
      <label>Address</label>
    </div>
    <center>
    <a href="#">
           SEND
       <span></span>
    </a></center>
  </form>
</div>
    )
}

