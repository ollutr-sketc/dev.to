import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Dropdown } from '@crayons';

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

export class CommentSubscription extends Component {
  state = {
    showOptions: false,
  };

  render() {
    const Icon = () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        role="img"
        aria-labelledby="ai2ols8ka2ohfp0z568lj68ic2du21s"
        className="crayons-icon"
      >
        <title id="ai2ols8ka2ohfp0z568lj68ic2du21s">Preferences</title>
        <path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    );

    const { showOptions } = this.state;
    const { onSubscribe } = this.props;

    return (
      <div>
        <ButtonGroup>
          <Button onClick={onSubscribe}>Subscribe</Button>
          <Button
            icon={Icon}
            onClick={(_event) => {
              this.setState({ showOptions: !showOptions });
            }}
          />
        </ButtonGroup>
        {/* z-index for dropdown? */}
        <Dropdown className={showOptions ? 'inline-block' : null}>
          <div className="crayons-fields mb-5">
            <FormField variant="radio">
              <RadioButton
                id="subscribe-all"
                name="subscribe_comments"
                className="crayons-radio"
                checked
              />
              <label htmlFor="subscribe-all" className="crayons-field__label">
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
              <label
                htmlFor="subscribe-toplevel"
                className="crayons-field__label"
              >
                Top-level comments
                <p className="crayons-field__description">
                  You’ll receive notifications only for all new top-level
                  comments.
                </p>
              </label>
            </FormField>

            <FormField variant="radio">
              <RadioButton
                id="subscribe-author"
                name="subscribe_comments"
                className="crayons-radio"
              />
              <label
                htmlFor="subscribe-author"
                className="crayons-field__label"
              >
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
      </div>
    );
  }
}

CommentSubscription.displayName = 'CommentSubscription';
