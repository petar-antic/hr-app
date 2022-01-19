import React from 'react';
import '../../styles/addNewQuestion/AddNewQuestion.css';

function Questions() {
  return (
    <div className="addNewQuestion">
      <span className="heading">Add new Question</span>
      <form>
        <div className="questionText">
          <label for="questionText">Question text</label>
          <input
            type="text"
            name="questionText"
            placeholder="Question text"
          ></input>
        </div>
        <div className="questionType">
          <label for="questionType">Question type</label>
          <select name="questionType">
            <option value="" selected hidden>
              Select question type
            </option>
            <option value="Text">Text</option>
            <option value="Long text">Long text</option>
            <option value="Image">Image</option>
          </select>
        </div>
        <button type="submit" id="saveBtn">
          Save
        </button>
      </form>
    </div>
  );
}

export default Questions;
