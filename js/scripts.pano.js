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

panorama2.link( panorama1, new THREE.Vector3( 1758.13, 3.44, -4673.36 ) );
panorama2.link( panorama3, new THREE.Vector3( -1666.60, 11.52, 4708.15 ) );

panorama3.link( panorama4, new THREE.Vector3( 1361.85, 184.40, -4796.89 ) );
panorama3.link( panorama2, new THREE.Vector3( -1284.25, -6.01, 4824.93 ) );

panorama4.link( panorama3, new THREE.Vector3( -3330.08, -3.11, 3728.18 ) );
panorama4.link( panorama5, new THREE.Vector3( -3879.22, 460.65, -3106.45 ) );
panorama4.link( panorama8, new THREE.Vector3( 2904.25, -75.51, -4064.07 ) );
panorama4.link( panorama10, new THREE.Vector3( 3183.65, 5.51, -3846.63 ) );

panorama5.link( panorama4, new THREE.Vector3( -4664.90, 10.63, -1779.38 ) );
panorama5.link( panorama6, new THREE.Vector3( -800.29, 1.93, 4928.56 ) );
panorama5.link( panorama7, new THREE.Vector3( -2361.45, 95.37, 4396.52 ) );

panorama6.link( panorama5, new THREE.Vector3( -3813.65, 154.28, 3215.11 ) );
panorama6.link( panorama7, new THREE.Vector3( 999.38, 229.01, 4888.00 ) );

panorama7.link( panorama5, new THREE.Vector3( -1881.18, -36.87, -4624.72 ) );
panorama7.link( panorama6, new THREE.Vector3( 837.14, 192.38, -4915.16 ) );

panorama8.link( panorama4, new THREE.Vector3( 4286.14, -11.90, -2566.87 ) );
panorama8.link( panorama9, new THREE.Vector3( 1339.26, 62.03, -4807.91 ) );

panorama9.link( panorama8, new THREE.Vector3( -4907.47, -63.22, -918.05 ) );

panorama10.link( panorama11, new THREE.Vector3( -1243.59, 194.54, -4828.17 ) );
panorama10.link( panorama4, new THREE.Vector3( 895.76, -44.98, -4911.73 ) );
panorama10.link( panorama15, new THREE.Vector3( -1201.49, 214.68, 4838.63 ) );
panorama10.link( panorama17, new THREE.Vector3( 2734.39, 99.64, 4173.25 ) );

panorama11.link( panorama10, new THREE.Vector3( -3172.80, 43.20, 3853.51 ) );
panorama11.link( panorama12, new THREE.Vector3( 4989.52, 72.33, -145.83 ) );
panorama11.link( panorama13, new THREE.Vector3( 2542.11, 29.75, -4301.39 ) );
panorama11.link( panorama14, new THREE.Vector3( 1819.85, 28.50, -4648.61 ) );

panorama12.link( panorama11, new THREE.Vector3( -1613.43, 239.62, 4718.98 ) );
panorama12.link( panorama13, new THREE.Vector3( -4940.68, 516.39, 532.08 ) );

panorama13.link( panorama11, new THREE.Vector3( -4690.44, 241.61, 1687.56 ) );
panorama13.link( panorama12, new THREE.Vector3( -1858.32, 388.07, 4618.73 ) );
panorama13.link( panorama14, new THREE.Vector3( -4428.40, 330.42, -2278.58 ) );

panorama14.link( panorama11, new THREE.Vector3( 808.66, 374.01, 4912.45 ) );
panorama14.link( panorama13, new THREE.Vector3( 4081.00, 476.11, 2837.17 ) );

panorama15.link( panorama10, new THREE.Vector3( -1471.26, 171.39, 4768.10 ) );
panorama15.link( panorama16, new THREE.Vector3( 1490.25, -72.99, -4767.01 ) );
panorama15.link( panorama18, new THREE.Vector3( 4973.81, -253.09, -309.95 ) );

panorama16.link( panorama15, new THREE.Vector3( -3454.29, -96.93, 3601.71 ) );
panorama16.link( panorama20, new THREE.Vector3( -4865.27, -112.39, -1117.56 ) );

panorama17.link( panorama10, new THREE.Vector3( 814.68, -40.45, -4924.75 ) );

panorama18.link( panorama15, new THREE.Vector3( 3062.78, -71.96, 3941.16 ) );
panorama18.link( panorama19, new THREE.Vector3( -2499.75, -65.99, 4327.20 ) );

panorama19.link( panorama18, new THREE.Vector3( 3978.59, 28.10, 3019.29 ) );

panorama20.link( panorama16, new THREE.Vector3( -898.56, -168.18, 4906.39 ) );
panorama20.link( panorama21, new THREE.Vector3( -3835.25, -79.84, -3193.08 ) );

panorama21.link( panorama16, new THREE.Vector3( 3577.76, 143.25, 3475.67 ) );
panorama21.link( panorama20, new THREE.Vector3( 4815.00, 130.65, 1302.40 ) );
//viewer.addUpdateCallback(function(){
//  
//});




