import { h } from 'preact';
import PropTypes from 'prop-types';
import { Dropdown, Button } from '@crayons';

const RadioButton = (props) => {
  return <input type="radio" {...props} />;
};

RadioButton.displayName = 'RadioButton';

const FormField = ({ children, variant = 'radio' }) => {
  return (
    <div className={`crayons-field crayons-field--${variant}`}>{children}</div>
  );
};

FormField.displayName = 'FormField';

export const CommentSubscription = () => {
  return (
    <Dropdown className="inline-block static">
      <div className="crayons-fields mb-5">
        <FormField variant="radio">
          <RadioButton
            id="subscribe-all"
            name="subscribe_comments"
            className="crayons-radio"
            checked
          />
          <label for="subscribe-all" className="crayons-field__label">
            All comments
            <p className="crayons-field__description">
              You’ll receive notifications for all new comments.
            </p>
          </label>
        </FormField>

        <FormField variant="radio">
          <RadioButton
            id="subscribe-toplevel"
            name="subscribe_comments"
            className="crayons-radio"
          />
          <label for="subscribe-toplevel" className="crayons-field__label">
            Top-level comments
            <p className="crayons-field__description">
              You’ll receive notifications only for all new top-level comments.
            </p>
          </label>
        </FormField>

        <FormField variant="radio">
          <RadioButton
            id="subscribe-author"
            name="subscribe_comments"
            className="crayons-radio"
          />
          <label for="subscribe-author" className="crayons-field__label">
            Post author comments
            <p className="crayons-field__description">
              You’ll receive notifications only if post author sends a new
              comment.
            </p>
          </label>
        </FormField>
      </div>

      <Button className="w-100">Done</Button>
    </Dropdown>
  );
};

CommentSubscription.displayName = 'CommentSubscription';
