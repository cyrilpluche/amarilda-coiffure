/** REACT */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

/** COMPONENTS */
import AdminDashboard from '../AdminDashboard'

/** STYLES */
import { style } from './Style'
import { globalStyle } from '../../../style'

/** MATERIAL UI */
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import _action from "../../../actions";

class AdminContainer extends React.Component {

    constructor (props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)

        this.state = {
            mobileOpen: false,
            component: 'Member'
        };
    }

    componentDidMount () {
        const { onLoadData } = this.props
        onLoadData('Member')
    }

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    handleDrawerClick = (component) => {
        const { onLoadData } = this.props
        this.setState({ component: component });
        onLoadData('Prestation')
    };

    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <ListItem button onClick={() => this.handleDrawerClick('Informations')}>
                        <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                        <ListItemText primary={'Informations'} />
                    </ListItem>
                    <ListItem button onClick={() => this.handleDrawerClick('Prestation')}>
                        <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                        <ListItemText primary={'Prestation'} />
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            {this.state.component}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <AdminDashboard tableSelected={this.state.component} />
                </main>
            </div>
        );
    }
}

AdminContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    table: state.Admin.table
})

const mapDispatchToProps = {
    onLoadData: _action.adminAction.loadData,
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(style, { withTheme: true })(AdminContainer));