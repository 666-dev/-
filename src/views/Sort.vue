<template>
  <div>
    <!-- 侧边栏导航 -->
    <!-- <van-sidebar v-model="activeKey">
          <van-sidebar-item title="服饰鞋包"></van-sidebar-item>
          <van-sidebar-item title="个人清洁"></van-sidebar-item>
          <van-sidebar-item title="亲子母婴"></van-sidebar-item>
          <van-sidebar-item title="运动旅行"></van-sidebar-item>
          <van-sidebar-item title="数码家电"></van-sidebar-item>
          <van-sidebar-item title="居家生活"></van-sidebar-item>
          <van-sidebar-item title="家居用品"></van-sidebar-item>
    </van-sidebar>-->
    <van-tree-select height="100%" :items="items" :main-active-index.sync="active" class="tree">
      <template #content>
        <div v-if="active==0">
          <div style="margin:10px 10px 0px 10px">
            <van-image :src="require('../assets/imgs/lb1.png')"></van-image>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="女装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
        <div v-if="active==1">
          <div style="margin:10px 10px 0px 10px">
            <van-image :src="require('../assets/imgs/lb1.png')"></van-image>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
        <div v-if="active==2">
          <div style="margin:10px 10px 0px 10px">
            <van-image :src="require('../assets/imgs/lb1.png')"></van-image>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
        <div v-if="active==3">
          <div style="margin:10px 10px 0px 10px">
            <van-image :src="require('../assets/imgs/lb1.png')"></van-image>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
        <div v-if="active==4">
          <div style="margin:10px 10px 0px 10px">
            <van-image :src="require('../assets/imgs/lb1.png')"></van-image>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
        <div v-if="active==5">
          <div style="margin:10px 10px 0px 10px">
            <van-image :src="require('../assets/imgs/lb1.png')"></van-image>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
         <div v-if="active==6">
          <div style="margin:10px 10px 0px 10px">
            <van-image :src="require('../assets/imgs/lb1.png')"></van-image>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <van-cell title="男装" value="查看更多" is-link></van-cell>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image :src="require('../assets/sort/xiz.jpg')"></van-image>
                <p>男士西装</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/polo.png')"></van-image>
                <p>polo短袖</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nk.jpg')"></van-image>
                <p>男士运动裤</p>
              </van-grid-item>
              <van-grid-item>
                <van-image :src="require('../assets/sort/nwt.png')"></van-image>
                <p>男士外套</p>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
      </template>
    </van-tree-select>
    <Foot></Foot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      items: [
        { text: "服饰鞋包" },
        { text: "个人清洁" },
        { text: "亲子母婴" },
        { text: "运动旅行" },
        { text: "数码家电" },
        { text: "居家生活" },
        { text: "家居用品" }
      ]
    };
  }
};
</script>

<style scoped>
/* 分类选择定位 */
.tree {
  position: fixed;
}
/* p */
p {
  margin-top: 6px;
}
/* 分类选项 */
.van-tree-select__nav {
  flex: 0.7;
}
/* h样式 */
.text {
  text-align: center;
}
.van-cell {
  padding: 0px 16px;
}
.van-cell::after {
  border: 0;
}
</style>