import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    alert("The value is: " + this.input.value);
    e.preventDefault();
  }

  render() {
    return (
      <div class="contact-div">
      <br/>
      <br/>
        <div class="contact-form">
          <form onSubmit={this.handleSubmit}>
            <div class="row">
                <div class="col-6">
                    <div>
                    <label>
                        Name:
                        <input
                        type="text"
                        class="form-control"
                        ref={input => (this.input = input)}
                        />
                    </label>
                    </div>
                    <div class="test">
                    <label>
                        Email:
                        <input
                        type="text"
                        class="form-control"
                        ref={input => (this.input = input)}
                        />
                    </label>
                    </div>
                </div>
                <div class="col-6">
                    <div class="test">
                        <label id="msg">
                            Message:
                            {/* <input type="text" class="input-group-text form-control" /> */}
                            <textarea
                            class="form-control"
                            aria-label="With textarea"
                            ref={input => (this.input = input)}
                            />
                        </label>
                    </div>
                </div>
            </div>
                <input
                type="submit"
                class="button"
                id="contact-submit"
                value="Submit"
                />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
