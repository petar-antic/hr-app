import React from 'react';
import { useLocation } from 'react-router';
import '../../../styles/questions/editQuestion/EditQuestion.css';

function EditQuestion() {
  const location = useLocation();
  console.log(location.state.type);

  return (
    <div className="editQuestion">
      <span className="heading">Edit Question</span>
      <form>
        <div className="questionText">
          <label>Question text</label>
          <input
            type="text"
            name="questionText"
            placeholder="Question text"
          ></input>
        </div>
        <div className="questionType">
          <label>Question type</label>
          <select name="questionType">
            <option value="" hidden>
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

export default EditQuestion;
