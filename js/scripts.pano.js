var panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10, panorama11, panorama12, viewer, container, infospot;
var panorama13, panorama14, panorama15, panorama16, panorama17, panorama18, panorama19, panorama20, panorama21;

container = document.querySelector( '#container' );

panorama1 = new PANOLENS.ImagePanorama( './asset/PIC_1.jpg' );
panorama2 = new PANOLENS.ImagePanorama( './asset/PIC_2.jpg' );
panorama3 = new PANOLENS.ImagePanorama( './asset/PIC_3.jpg' );
panorama4 = new PANOLENS.ImagePanorama( './asset/PIC_4.jpg' );
panorama5 = new PANOLENS.ImagePanorama( './asset/PIC_5.jpg' );
panorama6 = new PANOLENS.ImagePanorama( './asset/PIC_6.jpg' );
panorama7 = new PANOLENS.ImagePanorama( './asset/PIC_7.jpg' );
panorama8 = new PANOLENS.ImagePanorama( './asset/PIC_8.jpg' );
panorama9 = new PANOLENS.ImagePanorama( './asset/PIC_9.jpg' );
panorama10 = new PANOLENS.ImagePanorama( './asset/PIC_10.jpg' );
panorama11 = new PANOLENS.ImagePanorama( './asset/PIC_11.jpg' );
panorama12 = new PANOLENS.ImagePanorama( './asset/PIC_12.jpg' );
panorama13 = new PANOLENS.ImagePanorama( './asset/PIC_13.jpg' );
panorama14 = new PANOLENS.ImagePanorama( './asset/PIC_14.jpg' );
panorama15 = new PANOLENS.ImagePanorama( './asset/PIC_15.jpg' );
panorama16 = new PANOLENS.ImagePanorama( './asset/PIC_16.jpg' );
panorama17 = new PANOLENS.ImagePanorama( './asset/PIC_17.jpg' );
panorama18 = new PANOLENS.ImagePanorama( './asset/PIC_18.jpg' );
panorama19 = new PANOLENS.ImagePanorama( './asset/PIC_19.jpg' );
panorama20 = new PANOLENS.ImagePanorama( './asset/PIC_20.jpg' );
panorama21 = new PANOLENS.ImagePanorama( './asset/PIC_21.jpg' );

  // viewer.setPanorama( panorama2 );
// } );

// panorama.add( infospot );

viewer = new PANOLENS.Viewer( {output: 'console', container: container});
viewer.add( panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10, panorama11, panorama12);
viewer.add( panorama13, panorama14, panorama15, panorama16, panorama17, panorama18, panorama19, panorama20, panorama21);

panorama1.link( panorama2, new THREE.Vector3( -2697.55, 277.78, -4188.84 ) );

panorama1.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-2200.41, 341.40, -4467.740), 0 );
} );

panorama2.link( panorama1, new THREE.Vector3( 1758.13, 3.44, -4673.36 ) );
panorama2.link( panorama3, new THREE.Vector3( -1666.60, 11.52, 4708.15 ) );

panorama2.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-2058.25, 109.20, 4550.40), 0 );
} );

panorama3.link( panorama4, new THREE.Vector3( 1361.85, 184.40, -4796.89 ) );
panorama3.link( panorama2, new THREE.Vector3( -1284.25, -6.01, 4824.93 ) );

panorama3.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(1526.62, 193.61, -4752.37), 0 );
} );

panorama4.link( panorama3, new THREE.Vector3( -3330.08, -3.11, 3728.18 ) );
panorama4.link( panorama5, new THREE.Vector3( -3879.22, 460.65, -3106.45 ) );
panorama4.link( panorama8, new THREE.Vector3( 2904.25, -75.51, -4064.07 ) );
panorama4.link( panorama10, new THREE.Vector3( 3183.65, 5.51, -3846.63 ) );

panorama4.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(3184.73, -218.63, -3835.00), 0 );
} );

panorama5.link( panorama4, new THREE.Vector3( -4664.90, 10.63, -1779.38 ) );
panorama5.link( panorama6, new THREE.Vector3( -800.29, 1.93, 4928.56 ) );
panorama5.link( panorama7, new THREE.Vector3( -2361.45, 95.37, 4396.52 ) );

panorama5.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4549.23, 442.24, 2022.44), 0 );
} );

panorama6.link( panorama5, new THREE.Vector3( -3813.65, 154.28, 3215.11 ) );
panorama6.link( panorama7, new THREE.Vector3( 999.38, 229.01, 4888.00 ) );

panorama6.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4257.56, -539.25, -2551.60), 0 );
} );

panorama7.link( panorama5, new THREE.Vector3( -1881.18, -36.87, -4624.72 ) );
panorama7.link( panorama6, new THREE.Vector3( 837.14, 192.38, -4915.16 ) );

panorama7.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4837.11, -438.55, 1159.10), 0 );
} );

panorama8.link( panorama4, new THREE.Vector3( 4286.14, -11.90, -2566.87 ) );
panorama8.link( panorama9, new THREE.Vector3( 1339.26, 62.03, -4807.91 ) );

panorama8.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4930.03, -465.17, 638.04), 0 );
} );

panorama9.link( panorama8, new THREE.Vector3( -4907.47, -63.22, -918.05 ) );

panorama9.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4983.62, -182.85, -175.44), 0 );
} );

panorama10.link( panorama11, new THREE.Vector3( -1243.59, 194.54, -4828.17 ) );
panorama10.link( panorama4, new THREE.Vector3( 895.76, -44.98, -4911.73 ) );
panorama10.link( panorama15, new THREE.Vector3( -1201.49, 214.68, 4838.63 ) );
panorama10.link( panorama17, new THREE.Vector3( 2734.39, 99.64, 4173.25 ) );

panorama10.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-1137.74, -6.63, 4864.16), 0 );
} );

panorama11.link( panorama10, new THREE.Vector3( -3172.80, 43.20, 3853.51 ) );
panorama11.link( panorama12, new THREE.Vector3( 4989.52, 72.33, -145.83 ) );
panorama11.link( panorama13, new THREE.Vector3( 2542.11, 29.75, -4301.39 ) );
panorama11.link( panorama14, new THREE.Vector3( 1819.85, 28.50, -4648.61 ) );

panorama11.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4974.01, -405.84, -171.17), 0 );
} );

panorama12.link( panorama11, new THREE.Vector3( -1613.43, 239.62, 4718.98 ) );
panorama12.link( panorama13, new THREE.Vector3( -4940.68, 516.39, 532.08 ) );

panorama12.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-1275.79, -612.73, -4784.53), 0 );
} );

panorama13.link( panorama11, new THREE.Vector3( -4690.44, 241.61, 1687.56 ) );
panorama13.link( panorama12, new THREE.Vector3( -1858.32, 388.07, 4618.73 ) );
panorama13.link( panorama14, new THREE.Vector3( -4428.40, 330.42, -2278.58 ) );

panorama13.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4539.43, -190.85, -2072.73), 0 );
} );

panorama14.link( panorama11, new THREE.Vector3( 808.66, 374.01, 4912.45 ) );
panorama14.link( panorama13, new THREE.Vector3( 4081.00, 476.11, 2837.17 ) );

panorama14.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-1689.12, 172.43, -4692.75), 0 );
} );

panorama15.link( panorama10, new THREE.Vector3( -1471.26, 171.39, 4768.10 ) );
panorama15.link( panorama16, new THREE.Vector3( 1490.25, -72.99, -4767.01 ) );
panorama15.link( panorama18, new THREE.Vector3( 4973.81, -253.09, -309.95 ) );

panorama15.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(1682.02, -100.37, -4698.50), 0 );
} );

panorama16.link( panorama15, new THREE.Vector3( -3454.29, -96.93, 3601.71 ) );
panorama16.link( panorama20, new THREE.Vector3( -4865.27, -112.39, -1117.56 ) );

panorama16.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(3379.26, 360.10, -3662.14), 0 );
} );

panorama17.link( panorama10, new THREE.Vector3( 814.68, -40.45, -4924.75 ) );

panorama17.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(1200.37, -368.69, 4832.67), 0 );
} );

panorama18.link( panorama15, new THREE.Vector3( 3062.78, -71.96, 3941.16 ) );
panorama18.link( panorama19, new THREE.Vector3( -2499.75, -65.99, 4327.20 ) );

panorama18.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4567.23, -277.51, -2004.59), 0 );
} );

panorama19.link( panorama18, new THREE.Vector3( 3978.59, 28.10, 3019.29 ) );

panorama19.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3823.21, -565.01, -3156.03), 0 );
} );

panorama20.link( panorama16, new THREE.Vector3( -898.56, -168.18, 4906.39 ) );
panorama20.link( panorama21, new THREE.Vector3( -3835.25, -79.84, -3193.08 ) );

panorama20.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4103.70, -117.34, -2840.21), 0 );
} );

panorama21.link( panorama16, new THREE.Vector3( 3577.76, 143.25, 3475.67 ) );
panorama21.link( panorama20, new THREE.Vector3( 4815.00, 130.65, 1302.40 ) );

panorama21.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-1659.12, -2.43, -4711.41), 0 );
} );
//viewer.addUpdateCallback(function(){
//  
//});




