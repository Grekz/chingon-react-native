import React from 'react'
import FacebookIcon from './socialIcon.facebook'
import LinkedInIcon from './socialIcon.linkedin'
import TwitchIcon from './socialIcon.twitch'
import TwitterIcon from './socialIcon.twitter'
import YoutubeIcon from './socialIcon.youtube'

const SocialIcon = props => <FacebookIcon {...props} />

SocialIcon.Facebook = FacebookIcon
SocialIcon.LinkedIn = LinkedInIcon
SocialIcon.Twitch = TwitchIcon
SocialIcon.Twitter = TwitterIcon
SocialIcon.Youtube = YoutubeIcon

export default SocialIcon
