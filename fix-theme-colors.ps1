# PowerShell script to fix theme-aware colors across all components
# This script replaces hardcoded text-white with theme-aware text colors

$files = @(
    "src\components\sections\testimonials-section.tsx",
    "src\components\sections\progress-chart.tsx", 
    "src\components\sections\footer-cta.tsx"
)

foreach ($file in $files) {
    Write-Host "Processing $file..." -ForegroundColor Green
    
    # Read the file content
    $content = Get-Content $file -Raw
    
    # Replace specific text-white instances with theme-aware colors
    $content = $content -replace 'text-white mb-8"', 'text-gray-900 dark:text-white mb-8"'
    $content = $content -replace 'text-white mb-6 leading-tight"', 'text-gray-900 dark:text-white mb-6 leading-tight"'
    $content = $content -replace 'text-white uppercase tracking-wider"', 'text-gray-900 dark:text-white uppercase tracking-wider"'
    $content = $content -replace 'text-white font-black text-lg uppercase tracking-wider"', 'text-gray-900 dark:text-white font-black text-lg uppercase tracking-wider"'
    $content = $content -replace 'text-white text-sm uppercase tracking-wider"', 'text-gray-900 dark:text-white text-sm uppercase tracking-wider"'
    $content = $content -replace 'text-white text-lg uppercase tracking-wider"', 'text-gray-900 dark:text-white text-lg uppercase tracking-wider"'
    $content = $content -replace 'text-white mb-1 uppercase tracking-wider', 'text-gray-900 dark:text-white mb-1 uppercase tracking-wider'
    $content = $content -replace 'text-white mb-2 uppercase tracking-wider', 'text-gray-900 dark:text-white mb-2 uppercase tracking-wider'
    $content = $content -replace 'text-white mb-3 text-white', 'text-gray-900 dark:text-white mb-3 text-gray-900 dark:text-white'
    $content = $content -replace 'font-black text-lg text-white"', 'font-black text-lg text-gray-900 dark:text-white"'
    $content = $content -replace 'font-black text-white text-sm', 'font-black text-gray-900 dark:text-white text-sm'
    $content = $content -replace 'font-black text-white text-lg', 'font-black text-gray-900 dark:text-white text-lg'
    $content = $content -replace 'text-sm font-bold text-white', 'text-sm font-bold text-gray-900 dark:text-white'
    $content = $content -replace 'font-black text-center mb-12 text-white', 'font-black text-center mb-12 text-gray-900 dark:text-white'
    $content = $content -replace 'text-white group-hover:text-green-400', 'text-gray-900 dark:text-white group-hover:text-green-500 dark:group-hover:text-green-400'
    $content = $content -replace 'font-black text-lg text-white', 'font-black text-lg text-gray-900 dark:text-white'
    $content = $content -replace 'font-black text-white mb-6', 'font-black text-gray-900 dark:text-white mb-6'
    $content = $content -replace 'border-red-500/30 text-white', 'border-red-500/30 text-gray-900 dark:text-white'
    $content = $content -replace 'border-white/30 text-white', 'border-white/30 text-gray-900 dark:text-white'
    $content = $content -replace 'text-white hover:bg-white/10', 'text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10'
    $content = $content -replace 'hover:text-green-400', 'hover:text-green-500 dark:hover:text-green-400'
    $content = $content -replace 'text-xl font-black mb-3 text-white', 'text-xl font-black mb-3 text-gray-900 dark:text-white'
    
    # Write the content back to the file
    Set-Content -Path $file -Value $content -NoNewline
    
    Write-Host "✓ Updated $file" -ForegroundColor Green
}

Write-Host "All files processed successfully!" -ForegroundColor Cyan
