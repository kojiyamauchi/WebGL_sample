    <!--  Custom DOM Definition. -->
    <top-list>

      <!-- Insert Components / Layout -->
      <p each={ lists }><a href="{ path }">{ course } <span>To</span> { target }</a></p>
      <!-- Insert Components End. -->

      <!-- CSS Definition. Using Sass. -->
      <style type="scss">
      :scope {
        display: block;
        p {
            text-align: center;
            transform: translate(0,450%);
            margin: 0 0 10px;
            @media screen and (max-width: 1024px) {
              margin: 0 0 2.5% 0;
            }
            a {
                color: #999 !important;
                display: inline-block;
                @media screen and (max-width: 1024px) {
                  font-size: 2.125em;
                }
                span {
                    transform: rotate(0deg);
                    transition: transform 0.5s;
                    display: inline-block;
                }
                &:hover {
                    span {
                        transform: rotate(360deg);
                        transition: transform 0.5s;
                    }
                }
            }
            &:last-of-type {
              margin: 0;
                a {
                    &:hover {
                        span {
                            transform: rotate(-360deg);
                            transition: transform 0.5s;
                        }
                    }
                }
            }
        }
      }
      </style>
      <!-- CSS End. -->

      <!-- JavaScript / Logic -->
      <script>
      this.lists = [
        {
          path: 'sample1.html',
          course: 'Go',
          target: 'Sample1.'
        },
        {
          path: 'sample2.html',
          course: 'Go',
          target: 'Sample2.'
        },
        {
          path: 'sample3.html',
          course: 'Go',
          target: 'Sample3.'
        },
        {
          path: 'sample4.html',
          course: 'Go',
          target: 'Sample4.'
        },
        {
          path: 'sample5.html',
          course: 'Go',
          target: 'Sample5.'
        },
        {
          path: 'https://github.com/kojiyamauchi/WebGL_sample',
          course: 'Back',
          target: 'GitHub.'

        }
      ]

      </script>
      <!-- JavaScript End. -->

    </top-list>
    <!--  Custom DOM End. -->
