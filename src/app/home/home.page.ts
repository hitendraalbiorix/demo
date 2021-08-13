import { Component } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
import * as Plyr from 'plyr';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options: Plyr.Options = {
    seekTime: 15,
    controls: [
      'play-large', // The large play button in the center
      'rewind', // Rewind by the seek time (default 10 seconds)
      'play', // Play/pause playback
      'fast-forward', // Fast forward by the seek time (default 10 seconds)
      'progress', // The progress bar and scrubber for playback and buffering
      'current-time', // The current time of playback
      'duration', // The full duration of the media
      'mute', // Toggle mute
      'captions', // Toggle captions
      'settings', // Settings menu
      // 'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
      'fullscreen', // Toggle fullscreen,
      'hideControls',
    ],
    fullscreen: { enabled: true, fallback: true, iosNative: false },
    hideControls: false,
    previewThumbnails: {
      enabled: false,
      src: ''
    },
    displayDuration: false,
    speed: {
      selected: 1,
      options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]
    }
  };
  public videoSources: Plyr.Source[] = [
    {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      type: 'video/mp4'
    },
  ];

  constructor() {}

}
