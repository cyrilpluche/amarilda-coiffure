/** REACT */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

/** COMPONENTS */
import AdminDashboard from '../AdminDashboard'
import ContactTable from '../contactTable/ContactTable'

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
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import _action from "../../../actions";
import MiniLoader from "../../ui/loader/MiniLoader";
import AddBoxIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Button from "@material-ui/core/Button/Button";
import AdminLogin from "../adminLogin/AdminLogin";
import Grid from "@material-ui/core/es/Grid/Grid";
import AdminTable from "../adminTable/AdminTable";

class AdminContainer extends React.Component {

    constructor (props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)

        this.state = {
            mobileOpen: false,
            component: 'Admin'
        };
    }

    componentDidMount () {
        const { onLoadContact, onIsAdminLogged } = this.props
        onIsAdminLogged()
        onLoadContact()
    }

    generateAdminAccount () {
        const { onGenerateAdmin } = this.props
        onGenerateAdmin()
    }

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    handleDrawerClick = (component) => {
        const { onLoadData } = this.props
        this.setState({ component: component });
        onLoadData(component)
    };

    logoff () {
        const { onLogoff } = this.props
        onLogoff()
    }

    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <ListItem>
                        <Button
                            variant="outlined"
                            color='secondary'
                            onClick={this.logoff.bind(this)}
                            fullWidth
                        >
                            Se déconnecter
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button
                            variant="outlined"
                            color='primary'
                            onClick={this.generateAdminAccount.bind(this)}
                            fullWidth
                        >
                            Générer admin
                        </Button>
                    </ListItem>
                    <ListItem button onClick={() => this.handleDrawerClick('Admin')}>
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        <ListItemText primary={'Mon compte'} />
                    </ListItem>
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
            this.props.is_logged ? (

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
                        {this.state.component === 'Prestation' ? (
                            <AdminDashboard tableSelected={this.state.component} />
                        ) : (
                            this.state.component === 'Admin' ? (
                                <AdminTable/>
                            ) : (
                                this.props.isLoading > 0 ? (
                                    <div className={ classes.navMarginTop }>
                                        <MiniLoader/>
                                    </div>
                                ) : (
                                    <ContactTable contact={this.props.contact} />
                                )
                            )
                        )}
                    </main>

                </div>
            ) : (
                this.props.isLoading > 0 ? (
                    <Grid container alignItems='center' style={{ height: '100%' }}>
                        <Grid container justify='center'>
                            <MiniLoader size={150}/>
                        </Grid>
                    </Grid>
                ) : (
                    <AdminLogin/>
                )
            )
        );
    }
}

AdminContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    is_logged: state.Admin.is_logged,
    table: state.Admin.table,
    isLoading: state.Admin.isLoading,
    contact: state.Admin.contact
})

const mapDispatchToProps = {
    onLoadContact: _action.adminAction.loadContact,
    onLoadData: _action.adminAction.loadData,
    onGenerateAdmin: _action.adminAction.generateAdmin,
    onIsAdminLogged: _action.adminAction.isAdminLogged,
    onLogoff: _action.adminAction.logoff

}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(style, { withTheme: true })(AdminContainer));