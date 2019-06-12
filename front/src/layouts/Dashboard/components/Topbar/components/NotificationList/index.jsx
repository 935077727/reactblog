import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';

// Material icons
import {
  ArrowForwardIos as ArrowForwardIosIcon,
  Payment as PaymentIcon,
  PeopleOutlined as PeopleIcon,
  Code as CodeIcon,
  Store as StoreIcon
} from '@material-ui/icons';

// Component styles
import styles from './styles';

const icons = {
  order: {
    icon: <PaymentIcon />,
    color: 'blue'
  },
  user: {
    icon: <PeopleIcon />,
    color: 'red'
  },
  product: {
    icon: <StoreIcon />,
    color: 'green'
  },
  feature: {
    icon: <CodeIcon />,
    color: 'purple'
  }
};

class NotificationList extends Component {
  render() {
    const { className, classes, notifications, onSelect } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        {notifications.length > 0 ? (
          <Fragment>
            <div className={classes.header}>
              <Typography variant="h6">User Notifications</Typography>
              <Typography
                className={classes.subtitle}
                variant="body2"
              >
                No new notifications
              </Typography>
            </div>
            <div className={classes.content}>
              <List component="div">
                <Link
                  key={1}
                  to="#"
                >
                  <ListItem
                    className={classes.listItem}
                    component="div"
                    onClick={onSelect}
                  >
                    <ListItemIcon
                      className={classes.listItemIcon}
                      style={{ color: '#fff' }}
                    >
                      test
                    </ListItemIcon>
                    <ListItemText
                      classes={{ secondary: classes.listItemTextSecondary }}
                      primary={'test'}
                      secondary={'test'}
                    />
                    <ArrowForwardIosIcon className={classes.arrowForward} />
                  </ListItem>
                  <Divider />
                </Link>
              </List>
              <div className={classes.footer}>
                <Button
                  color="primary"
                  component={Link}
                  size="small"
                  to="#"
                  variant="contained"
                >
                  Test
                </Button>
              </div>
            </div>
          </Fragment>
        ) : (
          <div className={classes.empty}>
            <div className={classes.emptyImageWrapper}>
              <img
                alt="Empty list"
                className={classes.emptyImage}
                src="/images/empty.png"
              />
            </div>
            <Typography variant="h4">There's nothing here...</Typography>
          </div>
        )}
      </div>
    );
  }
}

NotificationList.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  notifications: PropTypes.array.isRequired,
  onSelect: PropTypes.func
};

NotificationList.defaultProps = {
  notifications: [],
  onSelect: () => {}
};

export default withStyles(styles)(NotificationList);
