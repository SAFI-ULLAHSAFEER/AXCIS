# Coinbase Images Copy Script
# Ye script tumhare WhatsApp/Downloads folder se images copy karega

# SOURCE: Yahan apna folder path daalo jahan images hain
$sourceFolder = "C:\Users\$env:USERNAME\Downloads"  # Ya koi aur path

# DESTINATION: Yahan images jaani chahiye
$destFolder = "d:\AXCIS\frontend\public\images\case-study\"

Write-Host "=" -ForegroundColor Cyan
Write-Host "Coinbase Images Copy Script" -ForegroundColor Yellow
Write-Host "=" -ForegroundColor Cyan
Write-Host ""

# Check if destination exists
if (!(Test-Path $destFolder)) {
    New-Item -ItemType Directory -Path $destFolder -Force | Out-Null
    Write-Host "✓ Created destination folder" -ForegroundColor Green
}

Write-Host "Looking for images in: $sourceFolder" -ForegroundColor White
Write-Host ""

# Find all image files in source
$images = Get-ChildItem -Path $sourceFolder -Include *.jpg,*.jpeg,*.png -File | 
          Sort-Object LastWriteTime -Descending | 
          Select-Object -First 10

if ($images.Count -eq 0) {
    Write-Host "✗ No images found in source folder!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please update the `$sourceFolder path in this script." -ForegroundColor Yellow
    exit
}

Write-Host "Found $($images.Count) recent images:" -ForegroundColor Green
$images | ForEach-Object { Write-Host "  - $($_.Name)" -ForegroundColor Gray }
Write-Host ""

# Ask for confirmation
$response = Read-Host "Copy these as coinbase-1.jpg to coinbase-10.jpg? (Y/N)"

if ($response -eq 'Y' -or $response -eq 'y') {
    $counter = 1
    foreach ($img in $images) {
        $destName = "coinbase-$counter.jpg"
        $destPath = Join-Path $destFolder $destName
        
        Copy-Item -Path $img.FullName -Destination $destPath -Force
        Write-Host "✓ Copied: $($img.Name) → $destName" -ForegroundColor Green
        $counter++
    }
    
    Write-Host ""
    Write-Host "=" -ForegroundColor Cyan
    Write-Host "✓ All images copied successfully!" -ForegroundColor Green
    Write-Host "Location: $destFolder" -ForegroundColor White
    Write-Host "=" -ForegroundColor Cyan
} else {
    Write-Host "Cancelled." -ForegroundColor Yellow
}
