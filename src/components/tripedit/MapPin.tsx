function MapPin({ color }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.99993 17.6571L10.6009 16.9799C11.2828 16.199 11.8961 15.458 12.4418 14.7532L12.8923 14.159C14.7733 11.6247 15.7142 9.61324 15.7142 8.12657C15.7142 4.95324 13.1561 2.38086 9.99993 2.38086C6.84374 2.38086 4.28564 4.95324 4.28564 8.12657C4.28564 9.61324 5.2266 11.6247 7.10755 14.159L7.55803 14.7532C8.33654 15.7508 9.15104 16.7187 9.99993 17.6571Z"
        fill={color}
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.0001 10.4758C11.3151 10.4758 12.381 9.40978 12.381 8.09482C12.381 6.77986 11.3151 5.71387 10.0001 5.71387C8.68513 5.71387 7.61914 6.77986 7.61914 8.09482C7.61914 9.40978 8.68513 10.4758 10.0001 10.4758Z"
        fill="#F3F5F5"
        stroke="#F3F5F5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default MapPin;
