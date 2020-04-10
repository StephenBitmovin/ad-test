const config = {
  key: '242fd156-0799-4dda-9d3b-7c8eb7c93fdf',
  advertising: {
    schedule: {

      'pre-roll-ad': {
        client: 'vmap',
        offset: 'pre',
        tag: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpreonly&cmsid=496&vid=short_onecue&correlator=&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpreonly&cmsid=496&vid=short_onecue'
      }
    }
  }
}

console.log('hello')

const source = {
  dash: 'https://bitmovin-a.akamaihd.net/content/multi-codec/vp9/stream.mpd'
}

const container = document.getElementById('my-player')
const player = new bitmovin.player.Player(container, config)

player.load(source)
  .then(() => console.log('Success with player'))
  .catch((e) => console.log('Failed to load player instance', e))