import React from "react";

class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emoji: "👯"
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    const key = "keyOMKqR26EuImHkH";
    const url = "https://api.airtable.com/v0/appHuijqYQJU98so4/EmojiPoll";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`
      },
      body: JSON.stringify({
        fields: {
          'Emoji Choice': this.state.emoji,
        }
      })
    });
  }

  handleSelect(event){
    this.setState({
      emoji : event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h1>Which of these emojis is your favorite?</h1>
        <div>
          <select onChange={this.handleSelect.bind(this)}>
            <option value="&#x1f46f;">&#x1f46f;</option>
            <option value="&#x1f351;">&#x1f351;</option>
            <option value="&#x1f4a5;">&#x1f4a5;</option>
            <option value="&#x1f355;">&#x1f355;</option>
            <option value="☠️">☠️</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Vote" />
        </div>
      </form>
    );
  }
}

export default Poll;
