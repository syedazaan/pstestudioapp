import React, { Component } from 'react';
import { StyleSheet, View, Text , Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { styles, styles1 } from '../styles/styles';
import  Colors  from '../styles/Colors';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome';
import Iconf from 'react-native-vector-icons/Feather';
import Icona from 'react-native-vector-icons/AntDesign';
import Iconfa from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/Ionicons';
import Iconm from 'react-native-vector-icons/MaterialIcons';
import Icone from 'react-native-vector-icons/Entypo';
import Icono from 'react-native-vector-icons/Octicons';

const myIcon   =  <Icon name="home" size={25} color="black" />;
const myIcon1 =  <Iconf name="search" size={30} color="gray" />;
const myIcon2 =  <Icona name="loading1" size={30} color="rgb(3,216,205)" />;
const myIcon3 =  <Iconfa name="check" size={17} color="rgb(3,216,205)" />;
const myIcon4 =  <Iconi name="chatbubble-ellipses-outline" size={25} color="gray" />;
const myIcon5 =  <Icona name="bells" size={25} color="grey" />;
const myIcon6 = <Iconm name= "store-mall-directory" size={25} color="rgb(121,132,211)" />;
const myIcon7 = <Icone name = "user" size = {25} color = "black" />;
const myIcon8 = <Icona name = "plussquare" size = {50} color = "rgb(121,132,211)" />;
const myIcon9 = <Icono name = "primitive-dot" size = {25} color = "rgb(3,216,205)" />;
const myIcon10 = <Icono name = "primitive-dot" size = {21} color = "rgb(211,219,231)" />;
const myIcon11 = <Iconfa name="unlock-alt" size={22} color= "rgb(211,219,231)" />;

const data = [
{
        description: "Arts and Humanities",
},

{
        description:  "Social contacts",
},

{
        description: "SMW Management",
},

{
        description:"Arts and Humanities",
},
] ;

export default class Main extends React.Component {
        constructor(props){
                super(props);
                this.state = {
                        data:data,
                        desc: true,
                };
        }

        render(){
                return(
            
                        <View style={[styles1.flexOne, styles1.bgGreyLight ]}>
                                {/* Main_Content */}
                                <View style={{flex:7, }}>
                                        <ScrollView style={{}}>
                                                <View style={{flex:1, marginTop:18, marginLeft:16, marginRight:16,}}>
                                                {/* <View style={[styles1.flexFive, styles1.marginTop18, styles1.marginLeft16, styles1.marginRight16, styles1.border]}>        */}
                                                
                                                {/* Header_Block */}
                                                
                                        <View style={[styles1.flexOne,  styles1.row, styles1.margin6,  styles1.radius16, styles1.bgWhite ]}>
                                                <TouchableOpacity 
                                                        onPress={()=> this.setState({desc:true})}
                                                        style={[styles1.flexOne,  styles1.padding14, styles1.allCenter ]}>
                                                                 <Text style={[styles1.fontSize17, ],{fontWeight:"bold"}}>ALL</Text>
                                                </TouchableOpacity>
                                   
                                                 <TouchableOpacity 
                                                        onPress={()=> this.setState({desc:false})}
                                                        style={[styles1.flexOneAndHalf,  styles1.padding14, styles1.BorderLeft, styles1.allCenter ]}>
                                                                 <Text style={[styles1.fontSize15, ]}>STUDYING</Text>
                                                </TouchableOpacity>
                                   
                                                 <View style={[styles1.flexOne, styles1.padding14, styles1.BorderLeft,  styles1.allCenter ]}>
                                                        <Text style={[styles1.fontSize15, ]}>SAVED</Text>
                                                </View>
                                        </View>

                          <View style={{}}>  
                        {this.state.desc ?
                        <View style={[]}>
                            
                            {/* Card_block */}
                            <View style={[ ]}>
                            <FlatList 
                                    // style={{flex:1}}
                                    horizontal
                                    // contentContainerStyle={[styles1.flexTwo]}
                                    data={this.state.data}
                                    renderItem={({item:rowData}) => {
                                    console.log("description",  rowData);
                                            return(
                                                <View style={{height:180, alignItems:"center", justifyContent:"center", borderWidth:0}}>
                                                        <View style={[  styles1.margin6,  styles1.radius16, styles1.bgWhite,  ]}>
                                                                <View style={[ styles1.flexOne, styles1.allCenter ]}>
                                                                <Image
                                                                    style={{ borderTopLeftRadius:12, borderTopRightRadius:12, width:200, height:100 }}
                                                                    // resizeMode={"contain"}
                                                                    source={require("../images/cardimg.jpg")}
                                                                />
                                                                </View>
                                                                <View style={[   styles1.padding20 ]}>
                                                                    <Text style={{fontSize:17, fontWeight:"bold"}}>{rowData.description}</Text>
                                                                </View>
                                                        </View>
                                                </View>
                                            )
                                    }
                                    }
                                    
                            />
                            </View>
                            {/* <View style={[styles1.flexThree, styles1.row, styles1.border]}>
                                    <View style={[styles1.flexOne, styles1.margin6, styles1.radius16, styles1.border ]}>
                                            <View style={[styles1.flexQuarterToOne, styles1.border, ]}></View>
                                            <View style={[styles1.flexHalf, styles1.border, ]}></View>
                                    </View> 
                                    <View style={[styles1.flexOne, styles1.margin6, styles1.radius16, styles1.border ]}>
                                            <View style={[styles1.flexQuarterToOne, styles1.border, ]}></View>
                                            <View style={[styles1.flexHalf, styles1.border, ]}></View>
                                    </View> 
                                    <View style={[styles1.flexOne, styles1.margin6, styles1.radius16, styles1.border ]}>
                                            <View style={[styles1.flexQuarterToOne, styles1.border, ]}></View>
                                            <View style={[styles1.flexHalf, styles1.border, ]}></View>
                                    </View>    
                            </View> */}
                            
                            {/* 1Content_block */}
                            <View style={[styles1.flexFive, styles1.margin6, styles1.radius16, styles1.bgWhite,  ]}>
                               
                                <View style={[styles1.flexOne, styles1.row, styles1.padding10, ]}>
                                        <View style={[styles1.flexOneAndQuarter, styles1.allCenter, ]}>{myIcon2}</View>
                                        <View style={[styles1.flexFive, styles1.row, styles1.centerHorizontal,]}>
                                                <Text style={{fontSize: 15, fontWeight:"bold", color :"rgb(121,132,211)", marginLeft:10 }}>Fundamentals of Art</Text>
                                        </View>
                                </View>
                               
                                <View style={[styles1.flexOne, styles1.row, styles1.padding10,]}>
                                        <View style={[styles1.flexOneAndQuarter, styles1.allCenter, ]}>
                                               {myIcon3}     
                                        </View>
                                        <View style={[styles1.flexFive,]}>
                                                <View style={[styles1.flexOne, styles1.centerVertical, ]}>
                                                        <Text style={{fontSize:23, fontWeight:'900', marginLeft:10,  }}>What is Art?</Text>
                                                </View>
                                                <View style={[styles1.flexHalf, styles1.centerVertical, ]}>
                                                        <Text style={{fontSize:16, color:'gray', fontWeight:"900", marginLeft:10, }}>What does it really mean?</Text>
                                                </View>
                                        </View>
                                </View>
                               
                                <View style={[styles1.flexOne, styles1.row, styles1.padding10, ]}>
                                        <View style={[styles1.flexOneAndQuarter, styles1.allCenter, ]}>{myIcon9}</View>
                                        <View style={[styles1.flexFive, ]}>
                                                <View style={[styles1.flexOne,  styles1.centerVertical,]}>
                                                        <Text style={{fontSize:23, fontWeight:'900', marginLeft:10,  }}>Different Forms of Art</Text>    
                                                </View>
                                                <View style={[styles1.flexHalf,  styles1.centerVertical, ]}>
                                                        <Text style={{fontSize:16, color:'gray', fontWeight:"900", marginLeft:10, }}>It is not just painting.</Text>
                                                </View>
                                        </View>
                                </View>
                               
                                <View style={[styles1.flexOne, styles1.row, styles1.padding10, ]}>
                                        <View style={[styles1.flexOneAndQuarter, styles1.allCenter, ]}>{myIcon10}</View>
                                        <View style={[styles1.flexFive, ]}>
                                                <View style={[styles1.flexOne,  styles1.centerVertical,]}>
                                                        <Text style={{fontSize:23, fontWeight:'900', marginLeft:10,  }}>Art Principles</Text>
                                                </View>
                                                <View style={[styles1.flexHalf,  styles1.centerVertical, ]}>
                                                        <Text style={{fontSize:16, color:'gray', fontWeight:"900", marginLeft:10, }}>Why are they important</Text>
                                                </View>
                                        </View>
                                </View>
                               
                                <View style={[styles1.flexOne, styles1.row, styles1.padding10, ]}>
                                        <View style={[styles1.flexOneAndQuarter, styles1.allCenter, ]}>{myIcon10}</View>
                                        <View style={[styles1.flexFive,  ]}>
                                                <View style={[styles1.flexOne,  styles1.centerVertical, ]}>
                                                        <Text style={{fontSize:23, fontWeight:'900', marginLeft:10,  }}>Color Theory</Text>
                                                </View>
                                                <View style={[styles1.flexHalf,  styles1.centerVertical, ]}>
                                                        <Text style={{fontSize:16, color:'gray', fontWeight:"900", marginLeft:10, }}>Understanding color.</Text>
                                                </View>
                                        </View>
                                </View>
                            
                            </View>
                            
                            {/* 2Content_block */}
                            <View style={[styles1.flexFive, styles1.margin6, styles1.radius16, styles1.bgWhite,  ]}>
                                    
                                    <View style={[styles1.flexOne, styles1.padding12, styles1.row, styles1.padding10, ]}>
                                            <View style={[styles1.flexOneAndQuarter, styles1.allCenter,  ]}>
                                                        <Text style={{paddingRight:7}}>{ myIcon11 }</Text></View>
                                            <View style={[styles1.flexFive, ]}>
                                                    <View style={[styles1.flexOne,  styles1.centerVertical, ]}>
                                                            <Text style={{fontSize: 15, paddingRight:25, fontWeight:"bold", color :"rgb(121,132,211)", marginLeft:10 }}>Approaches to Art History</Text>
                                                    </View>
                                            </View>
                                    </View>
                                    
                                    <View style={[styles1.flexOne, styles1.padding10, styles1.padding10,  styles1.row, ]}>
                                            <View style={[styles1.flexOneAndQuarter, styles1.allCenter, ]}>{myIcon10}</View>
                                            <View style={[styles1.flexFive, ]}>
                                                    <View style={[styles1.flexOne,  styles1.centerVertical, ]}>
                                                            <Text style={{fontSize:23, fontWeight:'900', marginLeft:10,  }}>An Introduction</Text>
                                                    </View>
                                                    <View style={[styles1.flexHalf,  styles1.centerVertical, ]}>
                                                            <Text style={{fontSize:16, color:'gray', fontWeight:"900", marginLeft:10, }}>Consequat nist vel pretium</Text>
                                                    </View>
                                            </View>
                                    </View>
                                    
                                    <View style={[styles1.flexOne, styles1.padding10,  styles1.row, ]}>
                                            <View style={[styles1.flexOneAndQuarter, styles1.allCenter, ]}>{myIcon10}</View>
                                            <View style={[styles1.flexFive, ]}>
                                                    <View style={[styles1.flexOne,  styles1.centerVertical, ]}>
                                                            <Text style={{fontSize:23, fontWeight:'900', marginLeft:10,  }}>Different forms of Art</Text>
                                                    </View>
                                                     <View style={[styles1.flexHalf,  styles1.centerVertical, ]}>
                                                            <Text style={{fontSize:16, color:'gray', fontWeight:"900", marginLeft:10, }}>Consectetur adipiscing</Text>
                                                     </View>
                                            </View>
                                    </View>
                                    
                                    <View style={[styles1.flexOne, styles1.padding10,  styles1.row, ]}>
                                            <View style={[styles1.flexOneAndQuarter, styles1.allCenter, ]}>{myIcon10}</View>
                                            <View style={[styles1.flexFive, ]}>
                                                    <View style={[styles1.flexOne,  styles1.centerVertical, ]}>
                                                            <Text style={{fontSize:23, fontWeight:'900', marginLeft:10,  }}>Art Principles</Text>
                                                    </View>
                                                    <View style={[styles1.flexHalf,  styles1.centerVertical, ]}>
                                                            <Text style={{fontSize:16, color:'gray', fontWeight:"900", marginLeft:10, }}>Tempus quam pelientesque nec</Text>
                                                    </View>
                                            </View>
                                    </View>
                                    
                                    <View style={[styles1.flexOne, styles1.padding10,  styles1.row, ]}>
                                            <View style={[styles1.flexOneAndQuarter, styles1.allCenter, ]}>{myIcon10}</View>
                                            <View style={[styles1.flexFive, ]}>
                                                    <View style={[styles1.flexOne,  styles1.centerVertical, ]}>
                                                            <Text style={{fontSize:23, fontWeight:'900', marginLeft:10,  }}>Color Theory</Text>
                                                    </View>
                                                    <View style={[styles1.flexHalf,  styles1.centerVertical, ]}>
                                                            <Text style={{fontSize:16, color:'gray', fontWeight:"900", marginLeft:10, }}>A lacutis at erat quam</Text>
                                                    </View>
                                            </View>
                                    </View>    
                            </View>
                            </View> :
                            
                                <View style={[styles1.flexThree]}>
                                        <View style={[styles1.flexTwo, styles1.padding32, ]}></View>
                                        <View style={[ styles1.allCenter, ]}>
                                                <Image
                                                        style={{flex:1, alignItems:"center",borderRadius:15, width:290, height:150 }}
                                                        source={require('../images/gallery.jpg')}
                                                />
                                        </View>
                                        <View style={[styles1.flexOne, styles1.padding20, ]}><Text></Text></View>
                                        <View style={[styles1.flexQuarterToOne, styles1.allCenter, ]}>
                                                <Text style={{fontSize:23, fontWeight:'bold'}}>No Courses!</Text>
                                        </View>
                                        <View style={[styles1.flexQuarterToOne, styles1.allCenter, ]}>
                                                <Text style={{fontSize:22, }}>Choose a course from</Text>
                                        </View>
                                        <View style={[styles1.flexQuarterToOne, styles1.allCenter, ]}>
                                                <Text style={{fontSize:22, }}>Courses tab or use the button</Text>
                                        </View>
                                        <View style={[styles1.flexQuarterToOne, styles1.allCenter, ]}>
                                                <Text style={{fontSize:22, }}>below to start.</Text>
                                        </View>
                                        <View style={[styles1.flexHalf, styles1.padding12, ]}></View>
                                        <View style={[styles1.flexOne, styles1.allCenter, ]}>{myIcon8}</View>
                                        <View style={[styles1.flexOneAndHalf, styles1.padding40, styles1.allCenter, ]}></View>
                                        
                                </View> }
                                </View>
                    </View>
                    </ScrollView>
                    </View>

                    {/* Icons_Block         */}
                    {/* <View style={{flex:0.3, flexDirection:'row', borderTopLeftRadius:40, borderTopRightRadius:40, border:1}}> */}
                    <View style={[styles1.flexQuarterToOne, styles1.row, styles1.borderTopRadius40, styles1.bgWhite ]}>
                            
                            <View style={[styles1.flexOne, styles1.allCenter, ]}>
                                    <View style={[styles1.flexOne, styles1.allCenter, ]}>{myIcon}</View>
                                    <View style={[styles1.flexHalf, styles1.allCenter, styles1.paddingBottom16, ]}>
                                            <Text style={[styles1.fontSize18]}>Home</Text>
                                    </View>
                            </View>
                            
                            <TouchableOpacity
                                // onPress={( )=> {
                                                        // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                                                        // let validate_result = validate() ;
                                                        // this.props.navigation.navigate("Profile", );
                                                        // {
                                                        // key: item[0].toString( )
                                                        //  }
                                                         
                                        // }} 
                                 style={[styles1.flexTwo, styles1.allCenter, ]}>
                                    <View style={[styles1.flexOne, styles1.allCenter, ]}>{myIcon6}</View>
                                    <View style={[styles1.flexHalf, styles1.allCenter, styles1.paddingBottom16, ]}>
                                            <Text style={[styles1.fontSize18, styles1.fontWeight600, ]}>Courses</Text>
                                    </View>
                            </TouchableOpacity>
                            
                                <TouchableOpacity
                                //  onPress={( )=> {
                                                        // console.log("navigation.", this.props.navigation)
                                                        // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                                                        // let validate_result = validate() ;
                                                        // this.props.navigation.navigate("Profile", );
                                                        //  this.props.navigation.navigate('Details')}
                                                        // {
                                                        // key: item[0].toString( )
                                                        //  }
                                                         
                                        // }} 

                                        onPress={() => this.props.navigation.navigate('Profile')}
                           
                                style={[styles1.flexOne, styles1.allCenter, ]}>
                                    <View style={[styles1.flexOne, styles1.allCenter,  ]}>{myIcon7}</View>
                                    <View style={[styles1.flexHalf, styles1.allCenter, styles1.paddingBottom16, ]}>
                                            <Text style={[styles1.fontSize18, styles1.fontWeight600, ]}>Profile</Text>
                                    </View>
                            </TouchableOpacity>
                    </View>
            </View>  
        )
    }

}