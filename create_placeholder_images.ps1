for ($i=1; $i -le 10; $i++) {
$svgContent = @"
<svg width="1200" height="900" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="900" fill="#0a1929"/>
  <text x="600" y="400" font-family="Arial" font-size="48" fill="#0066ff" text-anchor="middle">COINBASE INFRASTRUCTURE</text>
  <text x="600" y="480" font-family="Arial" font-size="32" fill="#ffffff" text-anchor="middle">Image $i - Placeholder</text>
  <text x="600" y="540" font-family="Arial" font-size="20" fill="#666666" text-anchor="middle">Replace with actual JPG photo</text>
</svg>
"@
    $svgContent | Out-File -FilePath "d:\AXCIS\frontend\public\images\case-study\coinbase-$i.svg" -Encoding UTF8
}

Write-Host "Created 10 SVG placeholder images" -ForegroundColor Green
Write-Host "These are placeholders - replace with actual JPG images" -ForegroundColor Yellow
