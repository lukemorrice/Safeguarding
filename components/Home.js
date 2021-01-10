import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Home extends Component {
  state = {
    showDescription: [],
  };

  toggleDescription = (index) => {
    this.state.showDescription[index] = !this.state.showDescription[index];
    this.setState({showDescription: this.state.showDescription});
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.header}>
            Safeguarding in the Diocese of Aberdeen
          </Text>

          {/* Safegaurding Badge */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('./images/badge.png')}
              style={styles.badge}
            />
          </View>

          {/* Website and address */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text style={{fontWeight: '600', fontSize: 16}}>
              St Mary’s House
            </Text>
            <Text style={{fontWeight: '600', fontSize: 16}}>14 Chanonry</Text>
            <Text style={{fontWeight: '600', fontSize: 16}}>Aberdeen</Text>
            <Text style={{fontWeight: '600', fontSize: 16}}>AB24 1RP</Text>
            <Text style={{fontWeight: '600', fontSize: 16}}>01224 319154</Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                textAlign: 'center',
                marginTop: 12,
              }}>
              Office hours: Monday-Friday 0900-1300 and 1400-1700{'\n'}
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 19,
                color: '#0000ff',
                textAlign: 'center',
              }}>
              www.rcda.scot/diocese/safeguarding/
            </Text>
          </View>

          {/* National Safeguarding Prayer */}
          <View>
            <TouchableOpacity onPress={() => this.toggleDescription(0)}>
              <View style={styles.box}>
                <Icon
                  name={
                    this.state.showDescription[0]
                      ? 'remove-circle-outline'
                      : 'add-circle-outline'
                  }
                  size={24}
                  style={{marginLeft: 10}}
                  color={'white'}
                  color={'white'}
                />
                <Text style={styles.subHeader}>
                  National Safeguarding Prayer
                </Text>
              </View>
            </TouchableOpacity>
            {this.state.showDescription[0] && (
              <Text style={styles.content}>
                Lord Jesus, we praise you for calling us to the service of
                others.
                {'\n\n'}We pray for a generosity of spirit to ensure the
                vulnerable are protected.{'\n\n'}We pray for a compassionate
                heart so that we will reach out to those who are wounded by
                abuse.
                {'\n\n'}
                We pray for courage and determination as we seek the safety of
                everyone in our parish communities.{'\n\n'}We dedicate ourselves
                to this work of service and pray that you will help us to do
                your will at all times and in all places.{'\n\n'}Amen
              </Text>
            )}
          </View>

          {/* Overview of Safeguarding */}
          <View style={{marginTop: 15}}>
            <TouchableOpacity onPress={() => this.toggleDescription(1)}>
              <View style={styles.box}>
                <Icon
                  name={
                    this.state.showDescription[1]
                      ? 'remove-circle-outline'
                      : 'add-circle-outline'
                  }
                  size={24}
                  style={{marginLeft: 10}}
                  color={'white'}
                />
                <Text style={styles.subHeader}>Safeguarding Overview</Text>
              </View>
            </TouchableOpacity>
            {this.state.showDescription[1] && (
              <View>
                <Text style={styles.content}>
                  Safeguarding is a duty that is rooted in the message of Jesus
                  and in the mission of the Church.
                </Text>
                <Text style={styles.content}>
                  The Catholic Church in Scotland aspires to the highest
                  standards with regard to the care and protection of children
                  and vulnerable adults, and actively promotes justice for, and
                  provides assistance to, those who have been abused.
                </Text>
                <Text style={styles.content}>
                  All components of the Catholic Church in Scotland, especially
                  those in positions of leadership and responsibility, value the
                  lives, wholeness, safety and well-being of each individual
                  person within God’s purpose for everyone.
                </Text>
                <Text style={styles.content}>
                  We seek to uphold the highest Safeguarding standards in our
                  relationships with people of all ages who are involved in
                  whatever capacity with the Church and its organisations.
                </Text>
                <Text style={styles.content}>
                  As a Church community, we accept that it is the responsibility
                  of all of us-ordained, professed, employed and voluntary
                  members-to work together to protect children and vulnerable
                  adults from abuse or harm.
                </Text>
                <Text style={[styles.content, {color: 'red'}]}>
                  <Text style={{fontStyle: 'italic'}}>In God's Image</Text>{' '}
                  Standard A
                </Text>
              </View>
            )}
          </View>

          {/* Key Ideas */}
          <View style={{marginTop: 15}}>
            <TouchableOpacity onPress={() => this.toggleDescription(2)}>
              <View style={styles.box}>
                <Icon
                  name={
                    this.state.showDescription[2]
                      ? 'remove-circle-outline'
                      : 'add-circle-outline'
                  }
                  size={24}
                  style={{marginLeft: 10}}
                  color={'white'}
                />
                <Text style={styles.subHeader}>Key Ideas</Text>
              </View>
            </TouchableOpacity>
            {this.state.showDescription[2] && (
              <View>
                <View style={{marginTop: 15}}>
                  <Text style={styles.keyidea}>Parish Priests</Text>
                  <Text style={styles.content}>
                    1. Once you have chosen your PSC, capitalise on their skills
                    and expertise to best support you and the parish.
                    {'\n'}
                    2. Make Safeguarding an agenda item for Parish Pastoral
                    Council meetings so that issues can be aired as and when
                    they arise.{'\n'}
                    3. Throughout the year, to enable you to complete the annual
                    Safeguarding Audit readily, and mindful of GDPR Legislation,
                    keep password-protected records regarding: recruitment of
                    volunteers, letters of Full Approval to volunteers, changes
                    of volunteers, training events attended, conferences
                    attended, and PVG applications approved.{'\n'}
                    4. Never feel overwhelmed - Safeguarding continues to
                    develop and grow and we learn all the time, just keep doing
                    your best – the key issue is safe recruitment.
                  </Text>
                  <Text style={[styles.content, {color: 'red'}]}>
                    For greater detail refer to{' '}
                    <Text style={{fontStyle: 'italic'}}>In God's Image</Text>{' '}
                    Standard 6.2 and Standard 8{'\n'}
                  </Text>
                </View>
                <View style={{marginTop: 15}}>
                  <Text style={styles.keyidea}>PSCs</Text>
                  <Text style={styles.content}>
                    • Arrange to meet with each new volunteer as soon as
                    possible
                    {'\n'}• Keep a note of dates of every PVG application
                    submitted and fulfilled{'\n'}• Arrange for a Diocesan or
                    Deanery Trainer to deliver Induction Part 1 at their
                    earliest mutual convenience, either face-to-face or by a
                    virtual meeting if distance is an issue{'\n'}• Keep records
                    to support the completion of the Annual Audit{'\n'}• Be
                    conscious of GDPR legislation when keeping records{'\n'}•
                    Reassure all new volunteers that you are there to support
                    them and the Parish Priest{'\n'}• Ensure that{' '}
                    <Text style={{fontWeight: '600'}}>no volunteer</Text> may
                    begin work until they have received a{' '}
                    <Text style={{fontWeight: '600'}}>
                      Letter of Full Approval
                    </Text>{' '}
                    from Diocesan Office{'\n'}• Remember you are not alone -
                    there are several others there to offer you support when
                    necessary
                  </Text>
                  <Text style={[styles.content, {color: 'red'}]}>
                    For greater detail refer to{' '}
                    <Text style={{fontStyle: 'italic'}}>In God's Image</Text>{' '}
                    Standard 6.2 and Standard 8{'\n'}
                  </Text>
                </View>
                <View style={{marginTop: 15}}>
                  <Text style={styles.keyidea}>Volunteers</Text>
                  <Text style={styles.content}>
                    Prevention and Protection means:{'\n'}• Safe people{'\n'}•
                    Safe places{'\n'}• Safe activities
                  </Text>
                  <Text style={styles.content}>
                    Prevention and protection are possible only when everyone
                    works together to provide evidence that the Catholic Church
                    in Scotland is a model of excellence in ensuring safe
                    people, places and activities.
                  </Text>
                  <Text style={[styles.content, {fontWeight: '600'}]}>
                    The Diocese has a special duty of care for children, young
                    people, vulnerable adults and survivors of abuse who have a
                    right to expect that our parishes are safe places for them.
                    {'\n'}
                  </Text>
                </View>
                <View style={{marginTop: 15}}>
                  <Text style={styles.keyidea}>Keeping our Places Safe</Text>
                  <Text style={styles.content}>
                    Each year all group leaders should check that the location
                    for their activity is safe. All concerns should be reported
                    to the Parish Priest who has responsibility for safeguarding
                    in his parish. Group leaders should complete an annual Risk
                    Assessment using the template available within the{' '}
                    <Text style={{fontStyle: 'italic', fontWeight: '600'}}>
                      In God’s Image
                    </Text>{' '}
                    resources Standard. The risk assessment should be given to
                    the Parish Priest.
                  </Text>
                  <Text style={[styles.content, {color: 'red'}]}>
                    <Text style={{fontStyle: 'italic'}}>In God's Image</Text>{' '}
                    Standard 1.1{'\n'}
                  </Text>
                </View>
                <View style={{marginTop: 15}}>
                  <Text style={styles.keyidea}>
                    Keeping our Activities Safe
                  </Text>
                  <Text style={styles.content}>
                    Since the first safeguarding manuals were created for the
                    Catholic Church in Scotland, all groups engaging in
                    activities have been expected to complete a Risk Assessment.
                    This might have to be completed once or perhaps several
                    times a year depending on the number and variety of
                    activities.
                  </Text>
                  <Text style={[styles.content, {color: 'red'}]}>
                    <Text style={{fontStyle: 'italic'}}>In God's Image</Text>{' '}
                    Standard 1.2
                  </Text>
                </View>
              </View>
            )}
          </View>

          {/* Volunteering */}
          <View style={{marginTop: 15}}>
            <TouchableOpacity onPress={() => this.toggleDescription(3)}>
              <View style={styles.box}>
                <Icon
                  name={
                    this.state.showDescription[3]
                      ? 'remove-circle-outline'
                      : 'add-circle-outline'
                  }
                  size={24}
                  style={{marginLeft: 10}}
                  color={'white'}
                />
                <Text style={styles.subHeader}>Volunteering</Text>
              </View>
            </TouchableOpacity>
            {this.state.showDescription[3] && (
              <View>
                <Text style={styles.content}>
                  If you wish to offer your time as a parish volunteer, contact
                  your Parish Priest, who will then direct you to the Parish
                  Safeguarding Coordinator (PSC).{'\n'}
                </Text>
                <Text style={[styles.keyidea, {marginTop: 15}]}>
                  Recruitment and Training Procedures
                </Text>
                <Text style={styles.content}>
                  All information provided in the forms below is treated in the
                  strictest confidence and in accordance with GDPR legislation.
                </Text>
                <Text style={styles.content}>
                  You will complete a Diocesan Volunteer Application Form which
                  asks for:{'\n'}• Personal details{'\n'}• Details of any health
                  condition which might prevent you from volunteering{'\n'}•
                  Details about any child you have had placed into care{'\n'}•
                  Information about any training, qualifications or experience
                  you may have to bring to your anticipated role{'\n'}• Contact
                  details of 2 referees - not the PSC or Parish Priest
                </Text>
                <Text style={styles.content}>
                  You will also complete a PVG Application Self-Declaration
                  Form:{'\n'}• This Form needs to be completed by you, along
                  with an Identity Verifier (ID Verifier) who is usually the
                  PSC.{'\n'}• The PVG Scheme is run by Disclosure Scotland. It
                  carries out a criminal record check for everyone who is in a ‘
                  <Text style={{fontWeight: '600', fontStyle: 'italic'}}>
                    regulated role
                  </Text>
                  ’ with children, young people and/or vulnerable adults.
                  Membership of the PVG Scheme is{' '}
                  <Text style={{fontWeight: '600'}}>mandatory</Text> for anyone
                  in such a role whether as a volunteer or in a paid post.{'\n'}
                </Text>
                <Text style={[styles.keyidea, {marginTop: 15}]}>Training</Text>
                <Text style={styles.content}>
                  The PSC will arrange for you to attend 2 training events:{' '}
                  <Text style={{fontWeight: '600'}}>
                    Safeguarding Training Induction Part 1
                  </Text>{' '}
                  followed by{' '}
                  <Text style={{fontWeight: '600'}}>
                    Safeguarding Training Induction Part 2
                  </Text>{' '}
                  within 18 months
                </Text>
                <Text style={styles.content}>
                  When all the above mandatory steps have been completed, you
                  will receive: a letter of Full Approval from the Diocese, and
                  training in the specific role you wish to undertake.
                </Text>
                <Text style={[styles.content, {color: 'red'}]}>
                  <Text style={{fontStyle: 'italic'}}>In God's Image</Text>{' '}
                  Standard 2.1.3, 2.1.4 and 2.1.6
                </Text>
              </View>
            )}
          </View>

          {/* Code of Conduct */}
          <View style={{marginTop: 15}}>
            <TouchableOpacity onPress={() => this.toggleDescription(4)}>
              <View style={styles.box}>
                <Icon
                  name={
                    this.state.showDescription[4]
                      ? 'remove-circle-outline'
                      : 'add-circle-outline'
                  }
                  size={24}
                  style={{marginLeft: 10}}
                  color={'white'}
                />
                <Text style={styles.subHeader}>Code of Conduct</Text>
              </View>
            </TouchableOpacity>
            {this.state.showDescription[4] && (
              <View>
                <Text style={[styles.content, {fontWeight: '600'}]}>
                  When we interact with vulnerable groups EVERYONE must:
                </Text>
                <Text style={styles.content}>
                  • Treat all people with respect{'\n'}• Respect and protect
                  emotional and physical boundaries{'\n'}• Respect the rights of
                  others to personal privacy{'\n'}• Remember that physical
                  contact can be misunderstood{'\n'}• Meet with a child or
                  vulnerable adult in an open and observable environment{'\n'}•
                  Remember that words and actions might be misinterpreted{'\n'}•
                  Be confident in sharing concerns appropriately{'\n'}• Be
                  confident in both challenging and reporting abusive behaviour
                  {'\n'}• Ensure that children and vulnerable adults know and
                  understand what to do if they have a Safeguarding concern.
                </Text>
                <Text style={[styles.content, {color: 'red'}]}>
                  <Text style={{fontStyle: 'italic'}}>In God's Image</Text>{' '}
                  Standard 2.3.1{'\n'}
                </Text>
                <Text style={[styles.content, {fontWeight: '600'}]}>
                  When we interact with vulnerable groups NO-ONE should:
                </Text>
                <Text style={styles.content}>
                  • Use inappropriate physical or verbal contact with children
                  or vulnerable adults{'\n'}• Have sexual relationships with
                  minors and/or vulnerable adults{'\n'}• Use behaviour or
                  language which is intrusive, derogatory or disrespectful{'\n'}
                  • Abuse alcohol while on duty supervising children or
                  vulnerable adults{'\n'}• Ignore Safeguarding concerns raised
                  by others{'\n'}• Prevent anyone from reporting any failure to
                  comply with Safeguarding policies{'\n'}• Participate in, or
                  ignore, behaviour that is illegal, unsafe or abusive.
                </Text>
                <Text style={[styles.content, {color: 'red'}]}>
                  <Text style={{fontStyle: 'italic'}}>In God's Image</Text>{' '}
                  Standard 2.3.2{'\n'}
                </Text>
                <Text style={[styles.content, {fontWeight: '600'}]}>
                  What should you do?
                </Text>
                <Text style={styles.content}>
                  • Take the person seriously{'\n'}• Ensure the immediate safety
                  of the person who might be at risk{'\n'}• Take emergency
                  action, if required, by contacting Police, Social Work or
                  Medical Services{'\n'}• Encourage the complainant to contact
                  the Safeguarding Adviser{'\n'}• Ensure that the person knows
                  that the Church has a mandatory reporting policy and that you
                  must inform the Safeguarding Adviser{'\n'}• Contact the
                  Safeguarding Adviser yourself
                </Text>
                <Text style={[styles.content, {color: 'red'}]}>
                  Leaflet "Safeguarding in the Catholic Church"{'\n'}
                </Text>
                <Text style={[styles.content, {fontWeight: '600'}]}>
                  Contact the Safeguarding Adviser in Aberdeen Diocese
                </Text>
                <Text style={styles.content}>
                  01224 319154{'\n'}
                  www.rcda.scot/diocese/safeguarding/{'\n'}
                </Text>
                <Text style={[styles.content, {fontWeight: '600'}]}>
                  For contact details of all Scottish Dioceses, contact the
                  Scottish Catholic Safeguarding Service:
                </Text>
                <Text style={styles.content}>
                  0141 353 1177{'\n'}
                  www.scsafeguarding.org.uk/Safeguarding{'\n'}
                </Text>
                <Text style={[styles.content, {fontWeight: '600'}]}>
                  Key ideas if someone confides in or discloses to you
                </Text>
                <Text style={styles.content}>
                  • <Text style={{fontWeight: '600'}}>LISTEN:</Text> Give them
                  your full attention, with eye contact.{'\n'}•{' '}
                  <Text style={{fontWeight: '600'}}>RESPOND:</Text> “You’ve done
                  the right thing telling me. I need to pass on this information
                  to someone who can help you”.{'\n'}•{' '}
                  <Text style={{fontWeight: '600'}}>RECORD:</Text> Note down
                  what they have said, using their own words. Note the time and
                  date of the disclosure.{'\n'}•{' '}
                  <Text style={{fontWeight: '600'}}>REFER:</Text> As soon as
                  possible to the Parish priest or PSC or the Diocesan
                  Safeguarding Adviser.
                </Text>
                <Text style={[styles.content, {color: 'red'}]}>
                  <Text style={{fontStyle: 'italic'}}>In God's Image</Text>{' '}
                  Standard 2.4{'\n'}
                </Text>
              </View>
            )}
          </View>

          {/* Organisational Structure */}
          <View style={{marginTop: 15}}>
            <TouchableOpacity onPress={() => this.toggleDescription(5)}>
              <View style={styles.box}>
                <Icon
                  name={
                    this.state.showDescription[5]
                      ? 'remove-circle-outline'
                      : 'add-circle-outline'
                  }
                  size={24}
                  style={{marginLeft: 10}}
                  color={'white'}
                />
                <Text style={styles.subHeader}>Organisational Structure</Text>
              </View>
            </TouchableOpacity>
            {this.state.showDescription[5] && (
              <View>
                <Text style={styles.content}>
                  The role of{' '}
                  <Text style={{fontWeight: '600'}}>
                    National Safeguarding Coordinator
                  </Text>{' '}
                  was established in 2004. Appointed following a recommendation
                  by{' '}
                  <Text style={{fontWeight: '600'}}>
                    The McLellan Commission Report
                  </Text>{' '}
                  in 2015,{' '}
                  <Text style={{fontWeight: '600'}}>
                    The Independent Review Group
                  </Text>{' '}
                  oversees the Audits, and the implementation of Quality
                  Assurance. Currently it is chaired by Baroness Helen Liddell.
                </Text>
                {/* Structure of the Diocese */}
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('./images/structure.png')}
                    style={styles.structure}
                  />
                </View>
                <Text style={styles.keyidea}>
                  Diocesan Safeguarding Adviser{' '}
                </Text>
                <Text style={styles.content}>Mrs Majory Booth{'\n'}</Text>
                <Text style={styles.keyidea}>
                  Diocesan Safeguarding Advisory Group
                </Text>
                <Text style={styles.content}>
                  Membership includes the Bishop’s Representative (Vicar
                  Episcopal) and professionals or volunteers with a background
                  in Police, Social Work, Health, Education, Law, Youth
                  Ministry, Safeguarding Training etc.{'\n'}
                </Text>
                <Text style={styles.keyidea}>
                  Diocesan Risk Assessment Management Team
                </Text>
                <Text style={styles.content}>
                  Membership comprises Vicar Episcopal for Safeguarding, Chair
                  and Diocesan Safeguarding Adviser
                </Text>
                <Text style={[styles.content, {color: 'red'}]}>
                  <Text style={{fontStyle: 'italic'}}>In God's Image</Text>{' '}
                  Standard 6{'\n'}
                </Text>
                <Text style={styles.keyidea}>
                  Structure of the Diocese of Aberdeen
                </Text>
                <Text style={styles.content}>
                  4 Deaneries{'\n'}
                  43 parishes{'\n'}
                  35 priests{'\n'}7 Permanent Deacons{'\n'}
                  37 Parish Safeguarding Coordinators{'\n'}
                  23 Members of Religious Orders{'\n'}
                  33 Religious in 2 Congregations{'\n'}
                  15 Trainers{'\n'}3 PVG Signatories{'\n'}
                  30 ID Verifiers{'\n'}
                </Text>
                <Text style={styles.keyidea}>Structure in Each Parish</Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('./images/structure2.png')}
                    style={styles.structure2}
                  />
                </View>
                <Text style={styles.content}>
                  All parishes must appoint a{' '}
                  <Text style={{fontWeight: '600'}}>
                    Parish Safeguarding Coordinator (PSC)
                  </Text>{' '}
                  who works closely with the Parish Priest. Their main function
                  is to ensure that recruitment procedures are followed and to
                  arrange for volunteers to attend training. They also help with
                  the completion of the Annual Safeguarding Audit.
                </Text>
                <Text style={[styles.content, {color: 'red'}]}>
                  <Text style={{fontStyle: 'italic'}}>In God's Image</Text>{' '}
                  Standard 6.2{'\n'}
                </Text>
              </View>
            )}
          </View>

          {/* Words from Pope Francis */}
          <View style={{marginTop: 15}}>
            <TouchableOpacity onPress={() => this.toggleDescription(6)}>
              <View style={styles.box}>
                <Icon
                  name={
                    this.state.showDescription[6]
                      ? 'remove-circle-outline'
                      : 'add-circle-outline'
                  }
                  size={24}
                  style={{marginLeft: 10}}
                  color={'white'}
                />
                <Text style={styles.subHeader}>Words of Pope Francis</Text>
              </View>
            </TouchableOpacity>
            {this.state.showDescription[6] && (
              <View>
                <Text style={styles.content}>
                  "Before all else, the Gospel tells us to respond to the love
                  of God who saves us, to see God in others and go forth from
                  ourselves to seek the good of others."
                </Text>
                <Text style={styles.content}>
                  “Christ calls every believer to be a shining example of
                  virtue, integrity and holiness”{'\n'}
                </Text>
                <Text style={styles.content}>
                  <Text style={{fontWeight: '600'}}>
                    Prayer of St Ignatius{'\n\n'}
                  </Text>
                  Lord, teach us to be generous.{'\n\n'}
                  Lord, teach us to serve you as you deserve,{'\n\n'}
                  To give and not to count the cost,{'\n\n'}
                  To fight and not to heed the wounds,{'\n\n'}
                  To toil and not to seek for rest,{'\n\n'}
                  To labour and not to seek reward save that of knowing that we
                  do your will.{'\n\n'}
                  Amen
                </Text>
              </View>
            )}
          </View>

          {/* Additional Links */}
          <View style={{marginTop: 15, marginBottom: 25}}>
            <TouchableOpacity onPress={() => this.toggleDescription(7)}>
              <View style={styles.box}>
                <Icon
                  name={
                    this.state.showDescription[7]
                      ? 'remove-circle-outline'
                      : 'add-circle-outline'
                  }
                  size={24}
                  style={{marginLeft: 10}}
                  color={'white'}
                />
                <Text style={styles.subHeader}>Additional Links</Text>
              </View>
            </TouchableOpacity>
            {this.state.showDescription[7] && (
              <Text style={styles.content}>
                <Text style={{fontWeight: '600'}}>
                  Safeguarding in the Diocese of Aberdeen{'\n'}
                </Text>
                <Text style={{color: '#0000ff'}}>
                  www.rcda.scot/diocese/safeguarding/{'\n\n'}
                </Text>
                <Text style={{fontWeight: '600'}}>
                  Bishops’ Conference of Scotland{'\n'}
                </Text>
                <Text style={{color: '#0000ff'}}>www.bcos.org.uk{'\n\n'}</Text>
                <Text style={{fontWeight: '600'}}>
                  Scottish Catholic Safeguarding Service{'\n'}
                </Text>
                <Text style={{color: '#0000ff'}}>
                  www.scsafeguarding.org.uk{'\n'}
                </Text>
                <Text style={{color: '#0000ff'}}>
                  www.scsafeguarding.org.uk/ingodsimage{'\n\n'}
                </Text>
              </Text>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    margin: 15,
    marginHorizontal: 20,
    height: '100%',
  },
  header: {
    fontSize: 34,
    fontWeight: '600',
    textAlign: 'center',
  },
  badge: {
    flex: 1,
    width: 300,
    height: 300,
    resizeMode: 'contain',
    margin: 20,
    marginBottom: 30,
  },
  structure: {
    flex: 1,
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  structure2: {
    flex: 1,
    width: 325,
    height: 325,
    marginTop: 20,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#0000ff',
    borderRadius: 9,
    opacity: 0.85,
    height: 50,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    margin: 7,
    color: 'white',
  },
  content: {
    fontSize: 18,
    marginTop: 10,
  },
  keyidea: {
    fontSize: 19,
    fontWeight: '600',
  },
});
