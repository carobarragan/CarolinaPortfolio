import Style from "../../../../styles/proyect.module.css";
export default function Skill() {
  return (
    <div className="flex-col-colum">
      <section className={Style.contenedor}>
        Skill
        <div className={Style.section}>
          <img className="hidden md:block" src="/next.jpg"></img>
          <img className="hidden md:block" src="/html.png"></img>
          <img className="hidden md:block" src="/javascript.png"></img>
          <img className="hidden md:block" src="/cloudinary.png"></img>
          <img className="hidden md:block" src="/redux.png"></img>
          <img className="hidden md:block" src="/react.jpg"></img>
          <img className="hidden md:block" src="/sql.png"></img>
          <img className="hidden md:block" src="/node.jpg"></img>
          <img className="hidden md:block" src="/svelte.jpg"></img>
          <img className="hidden md:block" src="/tailwind.png"></img>
          <img
            className="block md:hidden"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA0JJREFUSEvN1mvIn3MYB/DPHFMOOWTeoSU5lBwys7RkKzRJTg1NjmGyFZmcXlgZphVjzJZDjjNyzPCG0sga84KsaF4N0zAhTTb6Pl133e49z/52T21X3d3P87+v3/X9/a7re32v3yjbyUZtJ1w7NPAtmIW1eBcP45NOpsbiOkzEgbgN920pm4NOfBpeRAL/jetxLe7HndgZ92AaHsL8+u1jnI0PRgIfBPwI1uGOVoDDsQQ/YFfsifOxuuUzh6Ey3tQXOAAv44VOgH3wPTbhIPza+X4lxuOyvsDP4y083QnwJPbDLvgWAWpbUn8Mru4LfFcFv7UV4OY6yXHYCZ9VfR9o+eTvbOjevsAXFpHC5sNwNPYdIdhP+AJf4fQi3KtbC3wersAJldK0xnt4DLOxoBPwmmL7jZhUpPoZy2vNZhvosvrgItNeuBupcQiWJ4S6BOMK9NB6f1MMDsij+Atn4eJ6ogPRgBwm7yFrAwcsi3OaB4ux8Tmn+vfICrgCqeENFSO+03Fybfrr2vTS+p5eDy8uwEnY0AWeisnl0M5kevUXLKs0HoXPO6lO7VPf96s8yc7Gjs9r1R0vdYGTxpzu3M6C3bAeH5YkHotPOz5h+MriwYnFi6GTteyVKtlzw6U6UrewUhlxiF2OS3E8JpROZ/GU+h4eXFRpfAOr8DieaKU6Cpaahx+/d4Hz/yEIAyMM6cHFeBMRjLRRFqeWsVPqHT0OV8KPZxE2Z1PR6vhHA6JyqXF6e8iG0+r8FqfIXVK4f23inZo4iyor7TRmeEStQrIMlpzwR4SIyWDS/C8bNCTSFmmRt0tAQqxI5XAWoBAsrI6AXFVyO6zzIODba742rZMgaY3UNLUPD56qZ24LYR7W1MjsBfxMzdSuUkVQdq+xGMY3RGtAkvaQMZvrBZxLQOoT5rYtYpN5HDugYWrLIV2QWkcbegFHm9Me7TTmpLn+jCn2f1nK9mcLISXKhmb0BU4tU9P03x/VIhkYuRw0t5K03Znll9bbowRmJl7vC9z08xnF5u/qUvdRJ+CpNZNTgt8KMP3biNBm+INY3SwYjb1r1m7pEEfUHa2p/0i+O/a9esRdb8uH/5rqbcHo1U7/O2AT8B/uUqwfW8eDVwAAAABJRU5ErkJggg=="
          />
          <img
            className="block md:hidden"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAvJJREFUSEvl1mvon2MYB/DPNkIxvJGz7QU1oZG8EXIILyRySKNZe4HxAtmUmr2YQw5R5DjJeV6wyWltU0TOp3J84VAijNYcaw6Fvuv6//t59jz/3/NramlX/erXfd/P9b2v6/p+r+ueZDPZpM2E638HvCv2wXZ4Db+PmrlRIz4Ot2LGANB3uK7W/+p7gVGAL8TtWIcb8Tqm4RwcizuRM72sL/AxeA5PF9CvDe/n4n6cjyV9kPsAb41P8BMOwx8djh/CSZiOH4eB9wFOFHdVOp+fwOFu+KZv1H2Al2H/BqG68F/EDzjlv4g4rH0QC8rZVjgA76PJ4ktwcaV7QuxhEe9cLI6zyGgXvIs98ApW4nvkch/ic0TjazY14h3wMy7CHTgeqyZwGhIux7X4ZSLwYRGH0WHxZbgZO+HtivgaXF3Ok4FTcTIivUQ8F6u7wLuAp2A27sPXeHKE5pBWGmkdgSuqq22E3wYc0AAdiR2xFIdi32F1a+xfiptwC/L/X9YGfBvmVNqi2/NwN2bivQ7wMD0XPApXDnSvecWNs2t//PMm8CF4B/Prtjm4Pb7CU0hrbLPD8XJtpGtFDWP2GI6ujEXjG6wJnGjPwJ74c+DjhViEOAmpPm6gp66RUsr0KfYb2I+8vihl3NsF/Gbp9IKG4xDtgVr7AAc19gP0EZ5Amkha56A9i/U4vQs4t86tosNBOw2P10KcZBiMWaLM5Nq7OtpvLbXIOD2wCNua6ldrEoVcg5aSZNYm/Y8ONIfJuKfImDq+1AKapRVVhhO6Il6My+vmn3U4GVsODx6pKPIYyP82S6QhbNh+fRdwRlvIEdATO3ruNjX6QrJtET6Mk6aBnGHyDPJNJlwnq/NdnjF5aaR2LyCEewu51MGYhal4uKIIY6PX7Of83/UQzPvsLKytMflGs3Zt6dm95HNmQ5MBSRvNL9qOZWJdVReK5scsQyLPoBtqgm1EmiGl7L2dDO1VkX+LL1vm9bizYdOpN+qoB7c84H8AxhGUH7IGMcoAAAAASUVORK5CYII="
          />
          <img
            className="block md:hidden"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA3pJREFUSEvF1leoXVUQBuAvYANRUTEmsWNLomJBBTsWRLHkQRIlER9MFMQS0RArdrBgwV5eLKgxUVBjl8SeKIqgDxbsvWBDRcGG8oc5srPZ597L1csd2JzNPmvNv2bmn3/NGKNkY0YJ10DA+W89rI/P8Rn+bhx0PDbGl/gaEzEZG+F1vIAf+wXWBbwKTsZBBfYe/sKGWAE/YBK+wicFvibexDf4HWOxM9bAHDzbPkAbeEXcWs+q2L9AfsPTWFQOZuJQrIsX8RQex4E4C/GTTNyLbeq/y5rgbeDZeKMRcfugJ+Fw7NaRwj8qunfwIFaqNY/g/crUeb19beBsuAd3dzjO5stx4yCEvANLcHNj3YU4BNt3Aa+FS7B6RdX2fy6mYushdMIMHIu9au0t2AE7dQGHPEn1LvW0/cfZXUMAzZKPMBcLav3FVZ7eQZZrp7TNmdgKe3YAHFwRvIWPcX21UHPpS7gC3xfLQ7BYDn0c9uhX4yeR9smipv2MKZiHh/AF3u7gQlrwmOr3RPlyOQnbc/AT+gEvxn24oQX8HcLIaxvfk7Z2f8b5w/ipgJ4ror2CJ6qtlrloszpMzMaFwwQ+HdNKvQ7DMzixIk0JI0SdwEeU2oT+6zTA00q344JBIk6Z0m5pu20r1UdiHxzfDKYd8ThcUzXKyXv2aaU/dYtFLk+rw7SS4yhcjV0r2s1wSgnTv2u7tDp1TnR5evYr9sXSKs9tlbZIZ9s+qOii2cna9CLmcuu6gE9FNqcHcyn0LIr2KK4qIbm/ytKBbRZCrOy5qNorWYvfzhrnY06ZlOZQRze8RtXSp9HkSGJYfSdW60C+qdIdzvyCV3F+1Tr7+97HIUj0OgIfx7mV0mLXlQZvUMIf8ANawLnJosvR/fRxfOTA8RnCLWN2v0Fg7RKLAEVzk4FNEfLlhsq1t3sRsQ0cVYtCbYnt6j1DQwSop2QDTiCb4wxEtTKJhGCZLHLh71iXSRzv14r4eTyGlet77urUe1ByNReEXFsUWKaM1CyXfyRz73rPb9MySHyIaEFfG+6wl33zK6pMIk07u3gRFfvfgePwgZq5IolNy4SyCS4dKeBEHLZe2QD4s2qe6fK1kQI+B+/WcJDUZ+JMywU0fTygDbfGcZoRKdKZyL/FBKS/068ZgUcMOI7TMrn+wvy0TFpnSPZfIh4SQL9Fowb8D3bBwh+h3tkPAAAAAElFTkSuQmCC"
          />
          <img
            className="block md:hidden"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAuFJREFUSEvF1mvonnMYB/DPnzWHnEbk/EYpqzWniIiUaaXlEEtaWw7J+cxGRBFW2uINOdRa8sYL8k5by6F4IUp5sURpY2XmFHNq6Kvr1u3xPM//9/z7a796erq7r/v3va7vdfheU3bTmdpNuGYKvC8uw594BTsnDWBS4Ngvw2M4ssC+xCqsL0eafJgE+Aw8jVPwIx7E3PoPA+/jFrzbgtwCfDRW4wrswnN4AF8XwGF4HCvq+WXchW3jHBgHnCjuqd8+eBM34uMRFy7Eszi9ch5nn8Avw+xHAV9ZUSTaT3EnXmuhEEuLoWOxBfciLPzrDANei1vxAx6uvP7eCNqZ7Y27q+jC1hrc0b9jEHgv/IS3q126PE6I+4/5EXgVScMB+K17Mwg8D9/gySqQPuBtuAhLio2zq4pPxlFIWyX/LxRY9+0zuA4H49uZAD+Pq3FM/d7CHLxT1b4nTkVovhaxz2kCPqi8GhZxHzgD4wZcPBDdCfgQn2DBAHDY/G5UxK3AqdSbcD3W4edeTi7HfDw0CfC4HPcjPqT6+sCi+fOKMq0X6jO/u05ooroVeCvCznKkuI7D8Ti0otyIRfhjtnN8DTYPGQyH40UsxnnY1AOelRx/VBQnl9sHmjxCkvyfjw2twK1U31wz/Kvq224wnItz8AHOxK+zTfUXuL3mcnp3j4o66pUBch92TFLV0ddsE6nMS3sf545+Vae4upMxm57Nd58NqFE3Mk/E/uNGZi57CqEy4y2eR+oyjVIopyFyOVTqes7EPpqc7yMS/xlIo2TxEjyCTKL0ZsDi/Ru4YBrFiKRmNcpoTUqiUk2y2J9qFyJORBiiWOnb70cAn1RsnVWTLFtJloGJFoFRQaVSs3OlVyOfOendR3FVPb9UUc549RkED9WvF3B6N6nYD/dXKrLspTbemyYVf79uWfb69wxbb5PHlUik2bObzqTA3aUptmhugNJm//tC3xRNi9FMI265e6zNX/qtvB8W2YqIAAAAAElFTkSuQmCC"
          />
          <img
            className="block md:hidden"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAbtJREFUSEvt1U+IT1EUB/DPbxQ1ZUIpNqjZWFjMyoZSCimkbC0oO2mSSWIjGytiJxtZyEKyUNLU2EhmN1JS09TUmIjFDFLyJ3Tq/vR6vd979zf9Mgu/V7fXu/ec7/ec77nnvJZlelrLxKtP/M+U70udI/VWbMcmLOIpXuY4Fm26kXo1ruJEBclH3MAF/MoJIpd4AI+wrwH0CY4gAql9cokjk1E8xg8cxPoOyDPYi9nS+QZsxFTs5xCHzTWcLsg4hEspmCr+9ziDO1iTlAr/XfiWSxy1/YqfFQy7cQ/rmqTFMdxu2+Vk3IS5BQ+xrcbwMs4v9VbXBbACO3AA+1MQ7/AKF/Gs7Nwp452phtGzcSFe4zkmcL9dpyYp6s6riEOWczVOcSsPYb6XxHEBbmUALuBwmlpl85WI9SU341WIAXAlvT/haPqu6tnvOI67+J1IotbXcaqwV8lflHoEb/GhZDmcaru5QwZvMI5B7EktM9akWm47rcWDNADqMF8gejt+Hj0ZmQHSlvFkBWJIfRNn8bmJNHdylXFiSkVZYoW8c5jEdA5hLydXN3x/bXNrvCTw3HbqOXifuKjA/1fjP7mcRh+4H5eeAAAAAElFTkSuQmCC"
          />
          <img
            className="block md:hidden"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXJJREFUSEvt1z1LHFEUh/HfQhBEAlqk00ptoqCENNFG+2AniqRSURArm2ATTGFhryiI38DKVBZiqliIIKhgYRIwKcWk0EIslCN3YV1IimGG3WJvNy/3POflf+aeKanRKtWIq27AregvKAvH+Fu2XR3xEPYLAg/jawNczkAj1XnqrCGuZ9lsiOtf4vqBTrzAfXrpEGP4iSaMYwPN6Xku4vqOrgrwHbrxC+0JHM5NY7NI8AEG8AqXCfQRS2grEnyGXp6O2QV8RktVnQpJdTBG8CXBXmMRHyrghYFvUqTruE3ASWzlmeqLJKZKVZeD+4NPWE03vuEdMkccBs+TkSO8TXWMSGOyWMZsUnswBxHQUHWoOxP4dxqJHjCHUPEe3iCcGMU2YnSaQrTXWor4BD1ZwWFjvsJYXEebxJjUh8jGBHYRzsUKJ1Ywk0eNTxPsGiGcjqqWucJO+lq9x8u8VZ3lnP5vjWs23maJJNOeuvmTyOR9lk2Ph8RvH7ISktUAAAAASUVORK5CYII="
          />
          <img
            className="block md:hidden"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAaJJREFUSEvt179LllEUwPHPW1o4Jyjh2NDQZNCQFAoVSLUkNDlluEijDhqliKDR0hikg39AVFSDSz9GaQnFJcjFsSAcAikorlziRZ/n5b5PV1+I7vJwn3vu+d5znnPuOU9Ni0atRVyNwH24iOMJh/uM5QS5PyJl4Gncb0YR7mIudU8Z+AtOpCqpkxvHw5R9ZeBfKZujTLByAu1xngTPAe7HMbxqBp4L/A6Xm4HnAA/gbXRzMjw3OPCT4AcBLoLv4+QAf8S3giw4ja74/kDAKZn3H1xaJJq5uf5dV3/CS7ThDp5iDb24Hm+tDziDoT1uqBxcjzGJMWzjGm7gFk7hLC7hNnoQCkX9qAw+iQcYjtpeYBRLGMSbaGVoBq7iSC5wB57jSp3CZ5iPdTtUptdxHqwLRSOLxcGtG5jCT5zHFlbxBCvYxDpm8TUXeAePYhXqxk0s4Gh8fsc9dtNzBhdygVNytZFM5eA6NHDVZq/ogOF7d+5dKCuLIWBG/tbMuH8x5nfjMI+roWMMzfy5xIa+6IwhIEPUv8ePVIszGVuupmX/Tr8B7w1XH9uXRPYAAAAASUVORK5CYII="
          />
          <img
            className="block md:hidden"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZ5JREFUSEvt1zFIVlEUwPGfgxXoVlCJQ1RSg7YECYZRUG1Fg9DgqOAi5GI4CBWhk0sg2FAQTVGDLUFjNTbV6GJEOAgKLgnlYFy4iNV7H+d9PvkWL7zhvXfO+Z9z3j33nNemRautRVyNwJdxBYcDzi3jZUBuR6QM/BAPqhjCNGaiOmXgNRyNGtklN4m5iF4ZeDuinGVSlPfRnu9D8DrAV3EI76rA6wJ/xI0q8DrA1/AhpzkMrxuc+CH4foCL4P9x6gB/xUZBFZzH8fx8X8CRyjsAlzaJKifXQaqLMlB5c43gMX7gPb7jW7Y8gQWMYgDDeJKvpNO1y4PK4AtYxBJe4DVu4x5ScziJQdzEIzzDVNY5sxdwHzqwiXN4g1tI0San7uA3TqMT1zGLt9gTuFHE3RjHWaygF6cwn6NOjl5s9uR6irtYxxcM4RX6cQSpHfbgZwakvpzkVnECY82CIzUakam8uSJGIzJhcLPDXpET6TMd+/dFWVtMZZFquI71PNf6X7bKwGliTMP8peBAX+TgL3zGJ2xFI64j0oY2Wvbv9AfEIlcfzyLbvgAAAABJRU5ErkJggg=="
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 394 80"
            className="block md:hidden"
          >
            <path
              fill="#000"
              d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"
            />
            <path
              fill="#000"
              d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
