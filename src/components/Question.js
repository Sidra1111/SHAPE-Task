const Question = ({ question, value, onChange }) => {
    const handleInputChange = (e) => {
      const { value } = e.target;
      onChange(question.id, value);
    };
  
    const renderInfoIcon = () =>
      question.info && (
        <span className="info-icon" title={question.info}>
          i
        </span>
      );
  
    return (
      <div className="question" data-id={question.id}>
        {question.id === 4 ? (
          <>
            <div className="question-label">
              {question.question}
              {renderInfoIcon()}
            </div>
            <div className="question-note">Please enter up to 250 characters below</div>
          </>
        ) : (
          <label>
            {question.id === 1 || question.id === 2 ? (
              <>
                {question.question}
                {renderInfoIcon()}
              </>
            ) : (
              <>
                {question.question.split("?")[0]}? <br />
                {question.question.split("?")[1]}
                {renderInfoIcon()}
              </>
            )}
          </label>
        )}
  
        {(() => {
          switch (question.type) {
            case "text":
              return (
                <input
                  type="text"
                  name={question.id}
                  value={value || ""}
                  onChange={handleInputChange}
                />
              );
            case "date":
              return (
                <input
                  type="date"
                  name={question.id}
                  value={value || ""}
                  onChange={handleInputChange}
                />
              );
            case "dropdown":
              return (
                <select
                  name={question.id}
                  value={value || ""}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  {question.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              );
            case "buttons":
              return (
                <div className="button-group">
                  {question.options.map((option, index) => {
                    const label =
                      question.id === 5 ? String.fromCharCode(65 + index) : null;
                    return (
                      <button
                        key={index}
                        type="button"
                        name={question.id}
                        value={option}
                        className={value === option ? "selected" : ""}
                        onClick={() => onChange(question.id, option)}
                        data-label={label || undefined}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              );
            case "textarea":
              return (
                <textarea
                  name={question.id}
                  value={value || ""}
                  onChange={handleInputChange}
                />
              );
            default:
              return null;
          }
        })()}
      </div>
    );
  };
  
  export default Question;
  