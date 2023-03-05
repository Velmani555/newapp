function LoginForm()
{
    return (<form>
      <label for="name">First Name</label><br />
      <input type="text" name="fname" placeholder="please enter your first name" /><br />
      <label for="name">last Name</label><br />
      <input type="text" name="lname"  placeholder="please enter your last name" /><br />
      <button onClick={alert("hi")}>Sumbit</button>
    </form>);
}
export default LoginForm;